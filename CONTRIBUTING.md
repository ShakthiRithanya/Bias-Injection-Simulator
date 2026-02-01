# Contributing to Bias Injection Simulator

We welcome contributions to the Bias Weaponization Lab.

## Workflow

1. **Fork** the repository.
2. **Clone** your fork.
3. Create a **Feature Branch** (`git checkout -b feature/AmazingBias`).
4. **Commit** your changes (`git commit -m 'Add AmazingBias type'`).
5. **Push** to the branch (`git push origin feature/AmazingBias`).
6. Open a **Pull Request**.

## Architecture Standards

### Backend
- Use Python 3.9+
- Follow `fastapi` best practices.
- All Bias Injectors must inherit from `backend.core.bias_injector.BiasInjector`.
- Type hints are mandatory.

### Frontend
- Next.js App Router.
- **Anti-Gravity Design System**: Use the defined CSS variables (`--neon-cyan`, `--glass-bg`).
- Do not introduce UI libraries that clash with the aesthetic (e.g. Material UI, Bootstrap).
- Use `fetch` via `lib/api.ts`.
