# 每日题目一致性保证机制

## 🎯 问题
确保当天所有用户（以及同一用户的多次访问）都能获得相同的题目。

## ✅ 解决方案

### 三层缓存机制

```
1. 缓存检查 (localStorage)
   ↓ 未命中
2. API 获取 → 缓存
   ↓ 失败
3. 降级方案 → 缓存
```

### 工作流程

1. **首次访问**
   - 检查 localStorage 缓存（未找到）
   - 从 API `https://get-nerdle-topic.gengliming110.workers.dev/` 获取题目
   - 验证题目有效性（8字符、格式正确、等式成立）
   - 将题目保存到 localStorage，标记来源为 `api`
   - 显示题目

2. **刷新页面**
   - 检查 localStorage 缓存（**命中！**）
   - 直接使用缓存的题目
   - **不再调用 API**

3. **API 失败情况**
   - API 请求失败或返回无效题目
   - 使用本地降级方案（基于日期哈希从题目池选择）
   - 将降级题目保存到 localStorage，标记来源为 `fallback`
   - 后续访问都使用这个缓存的题目

4. **第二天**
   - 缓存日期检查失败（日期不匹配）
   - 自动清除旧缓存
   - 重新执行首次访问流程

## 🔒 一致性保证

### 同一用户
- ✅ **多次刷新页面**：使用缓存，题目一致
- ✅ **关闭浏览器重开**：localStorage 持久化，题目一致
- ✅ **API 中途故障**：已有缓存，不受影响

### 不同用户
- ✅ **API 正常**：所有用户从 API 获取，题目一致（前提是 API 每天返回相同题目）
- ⚠️ **API 间歇性故障**：
  - 在 API 正常时访问的用户：获得 API 题目
  - 在 API 故障时访问的用户：获得降级题目
  - **这种情况下题目会不一致**

## 🛡️ 应对 API 间歇性故障

为了进一步提高一致性，建议：

### 方案1: 服务端渲染 (SSR)
- 在服务端获取题目
- 所有用户访问时都从服务端获取
- 服务端可以实现更可靠的缓存和重试机制

### 方案2: CDN 缓存
- 将 API 响应缓存到 CDN
- 即使 API 故障，CDN 仍可返回缓存的题目

### 方案3: 定时任务预加载
- 每天定时从 API 获取题目
- 将题目存储到数据库
- 用户从数据库读取

## 📊 缓存数据结构

```typescript
interface DailyAnswerCache {
  answer: string;        // 题目内容，如 "12+34=46"
  date: string;          // 日期字符串，如 "2025-10-21"
  source: 'api' | 'fallback';  // 来源标记
}
```

存储在 localStorage 的 key: `nerdle-daily-answer`

## 🧪 测试方法

### 测试1: 基本缓存功能
```bash
1. 打开浏览器 DevTools > Application > Local Storage
2. 清除 nerdle-daily-answer
3. 刷新页面
4. 检查 Console 输出: "首次加载，从API获取每日题目..."
5. 检查 Local Storage 中出现 nerdle-daily-answer
6. 再次刷新页面
7. 检查 Console 输出: "使用缓存的每日题目 (来源: API)"
```

### 测试2: API 失败降级
```bash
1. 打开 DevTools > Network
2. 右键 get-nerdle-topic.gengliming110.workers.dev > Block request URL
3. 清除 Local Storage
4. 刷新页面
5. 检查 Console 输出: "⚠️ API获取失败，使用降级方案生成每日题目"
6. 检查 Local Storage: source 为 "fallback"
7. 取消阻止 API
8. 刷新页面
9. 仍使用缓存的降级题目（确保一致性）
```

### 测试3: 跨天更新
```bash
1. 打开 DevTools > Application > Local Storage
2. 手动修改 nerdle-daily-answer 的 date 为昨天
3. 刷新页面
4. 旧缓存被清除，获取新题目
```

## 📝 控制台日志说明

- `首次加载，从API获取每日题目...` - 开始从 API 获取
- `✅ 成功从API获取题目并缓存` - API 获取成功
- `⚠️ API获取失败，使用降级方案生成每日题目` - 使用降级
- `使用缓存的每日题目 (来源: API)` - 使用缓存的 API 题目
- `使用缓存的每日题目 (来源: 降级方案)` - 使用缓存的降级题目

## 🔍 当前限制

1. **客户端缓存限制**：如果用户清除浏览器缓存，会重新获取题目
2. **跨设备不同步**：同一用户在不同设备上可能获得不同题目（如果 API 有故障）
3. **依赖 API 稳定性**：完全一致性需要 API 稳定且每天返回相同题目

## 💡 建议

如果需要 100% 保证所有用户题目一致，建议：
- 使用服务端缓存
- 或者在 API Workers 中实现每日题目缓存
- 或者完全使用客户端的降级方案（所有用户都用相同的算法生成）

