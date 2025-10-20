# The Nerdle Game

A modern, web-based implementation of the popular Nerdle math puzzle game built with Next.js, TypeScript, and Tailwind CSS.

## 🎮 About Nerdle

Nerdle is a mathematical puzzle game where players must guess a mathematical equation in 6 attempts. Each guess provides color-coded feedback to help you solve the equation. It's like Wordle, but for math!

## ✨ Features

- **Daily Challenges**: New puzzles every day with date-based seeding
- **Responsive Design**: Play on desktop, tablet, or mobile devices
- **Real-time Feedback**: Color-coded hints after each guess
- **Statistics Tracking**: Track your performance with detailed stats
- **Keyboard Support**: Both virtual and physical keyboard input
- **Smooth Animations**: Engaging visual feedback and transitions
- **Local Storage**: Your progress is automatically saved
- **Help System**: Built-in tutorial for new players

## 🎯 How to Play

1. **Guess the Equation**: Enter a valid 8-character mathematical equation
2. **Get Feedback**: After each guess, tiles change color to show:
   - 🟩 **Green**: Correct number/operator in the right position
   - 🟨 **Purple**: Correct number/operator in the wrong position  
   - ⬛ **Gray**: Number/operator not in the equation
3. **Solve in 6 Tries**: Use the feedback to solve the equation

### Game Rules

- Each equation must be exactly **8 characters** long
- Must contain exactly **one equals sign (=)**
- Right side of equals must be a **number**
- Available operators: `+`, `-`, `*`, `/`
- Follows standard order of operations
- No leading zeros or negative numbers
- Equation must be mathematically correct

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/the-nerdle-game.git
   cd the-nerdle-game
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.6](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **State Management**: React Hooks with localStorage persistence
- **Package Manager**: pnpm

## 📁 Project Structure

```
the-nerdle-game/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main game page
├── components/            # React components
│   ├── GameBoard.tsx      # Game grid component
│   ├── Header.tsx         # Navigation header
│   ├── HelpModal.tsx      # Game rules modal
│   ├── Keyboard.tsx       # Virtual keyboard
│   ├── Modal.tsx          # Base modal component
│   ├── StatsModal.tsx     # Statistics display
│   └── Tile.tsx           # Individual game tile
├── hooks/                 # Custom React hooks
│   └── useGameState.ts    # Game state management
├── lib/                   # Utility functions
│   ├── game-logic.ts      # Core game logic
│   └── storage.ts         # Local storage helpers
└── public/                # Static assets
```

## 🎨 Key Components

### Game Logic (`lib/game-logic.ts`)
- Daily answer generation with date-based seeding
- Equation validation and mathematical correctness checking
- Color feedback calculation (correct/present/absent)
- Game state management (win/lose conditions)

### State Management (`hooks/useGameState.ts`)
- Complete game state management
- Physical and virtual keyboard support
- Automatic localStorage persistence
- Error handling and validation

### UI Components
- **GameBoard**: 6×8 grid for displaying guesses
- **Keyboard**: Virtual keyboard with color feedback
- **Modals**: Help system and statistics display
- **Animations**: Flip, shake, and fade effects

## 🎯 Game Features

### Daily Puzzles
- New equation every day
- Date-based seeding ensures consistency
- 30+ carefully crafted equations
- Various difficulty levels

### Statistics
- Games played and win rate
- Current and best streak
- Guess distribution
- Performance tracking

### Accessibility
- Keyboard navigation support
- Color-blind friendly design
- Responsive layout for all devices
- Clear visual feedback

## 🎨 Design System

### Colors
- **Green** (`bg-green-600`): Correct position
- **Purple** (`bg-purple-600`): Wrong position  
- **Gray** (`bg-gray-700`): Not in equation
- **Dark** (`bg-gray-950`): Background

### Typography
- Clean, modern font stack
- Responsive text sizing
- Clear hierarchy

### Animations
- Tile flip animations
- Shake effects for errors
- Fade transitions
- Smooth state changes

## 📱 Responsive Design

The game is fully responsive with breakpoints:
- **Mobile** (< 640px): Compact layout
- **Tablet** (640px - 768px): Medium layout  
- **Desktop** (> 768px): Full layout

## 🔧 Development

### Code Quality
- TypeScript for type safety
- ESLint configuration
- Component-based architecture
- Custom hooks for state management

### Performance
- Turbopack for fast builds
- Static generation where possible
- Efficient localStorage usage
- Optimized animations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the original [Nerdle](https://nerdlegame.com/) game
- Built with modern web technologies
- Community feedback and contributions

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-username/the-nerdle-game/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

---

**Happy Nerdling! 🧮✨**