---
id: intention-api
title: Intention Api
slug: /intention-api
---

# Installation

> **Source:** https://isomorphic-doc.vercel.app/getting-started/installation  
> **Version:** v7.0.0

---

## Requirements

Before you begin, ensure that your computer has the following software installed.

- `nodejs` (20.16.0 or later) — https://nodejs.org/en
- `pnpm` Node package manager — https://pnpm.io/installation _(recommended)_
- `Visual Studio Code` — https://code.visualstudio.com/ _(recommended)_

---

## Installation

Before initiating the installation process, ensure all required environment variables are added.

### Setting Environment Variables

Open your terminal, navigate to the `apps -> isomorphic`, `apps -> isomorphic-intl` or `apps -> isomorphic-starter` individually of the project and execute the following command.

```bash
cp .env.local.example .env.local
```

This command copies the provided example file for local environment variables. Now, proceed to fill in the values for the following environmental variables in the newly created `.env.local` file.

- **`NEXT_PUBLIC_GOOGLE_MAP_API_KEY`** — Optional unless you're utilizing Google Maps. If you plan to integrate Google Maps, obtain your API key from [this link](https://developers.google.com/maps/documentation/javascript/get-api-key).

- **`NEXTAUTH_SECRET`** — Open your terminal (mac/linux) and enter the following command to generate a random 32-character base64-encoded string using OpenSSL. Windows users can generate one at https://generate-secret.vercel.app/32.

  ```bash
  openssl rand -base64 32
  ```

- **`NEXTAUTH_URL`** — Should be set to your project's base URL. During development, it defaults to `http://localhost:3000`. In production, update it to match your deployed application URL.

- **`GOOGLE_CLIENT_ID`** — Your project's Google API client ID. During development, use a test ID; for production, obtain the official ID from the [Google Developer Console](https://console.developers.google.com/).

- **`GOOGLE_CLIENT_SECRET`** — Your project's confidential key for secure communication with the Google API. During development, use a test secret; for production, obtain the official one from the [Google Developer Console](https://console.developers.google.com/).

Once you've completed the above steps, execute the following commands from the project's root directory:

| Command        | Description                                                                                                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm install` | Installs all necessary dependencies into the `node_modules` folder.                                                                                                                                          |
| `pnpm dev`     | Launches all workspaces in parallel, starts the development server, and monitors code changes. Access at `http://localhost:3000`, `http://localhost:3001`, `http://localhost:3002`, `http://localhost:3003`. |

---

## Available Scripts

These commands take effect on all workspaces in parallel.

| Command      | Description                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm lint`  | Checks for ESLint configurations and validation. Throws a warning if code doesn't meet configurations.                            |
| `pnpm build` | Builds all workspaces in parallel and creates a `.next` folder inside every workspace.                                            |
| `pnpm start` | Runs the local build files at `http://localhost:3000`, `http://localhost:3001`, `http://localhost:3002`, `http://localhost:3003`. |
| `pnpm clean` | Removes all `node_modules`, `.next`, and `.cache` folders from root and inside workspaces.                                        |

> **ℹ️ Info:** Individual workspace commands are also available. See below.

---

## Isomorphic Workspace

These commands only take effect on the main isomorphic workspace.

| Command          | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| `pnpm iso:dev`   | Launches only the main isomorphic workspace. Access at `http://localhost:3000`.        |
| `pnpm iso:lint`  | Checks code for syntax and adherence to coding standards.                              |
| `pnpm iso:build` | Creates an optimized production build in the `.next` folder.                           |
| `pnpm iso:start` | Starts the application in production mode at `http://localhost:3000`.                  |
| `pnpm iso:clean` | Removes `node_modules`, `.next`, `.cache`, and `.turbo` from the isomorphic workspace. |

---

## Isomorphic Intl Workspace

These commands only take effect on the isomorphic-intl workspace.

| Command           | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `pnpm intl:dev`   | Launches only the isomorphic-intl workspace. Access at `http://localhost:3001`.             |
| `pnpm intl:lint`  | Checks code for syntax and adherence to coding standards.                                   |
| `pnpm intl:build` | Creates an optimized production build in the `.next` folder.                                |
| `pnpm intl:start` | Starts the application in production mode at `http://localhost:3001`.                       |
| `pnpm intl:clean` | Removes `node_modules`, `.next`, `.cache`, and `.turbo` from the isomorphic-intl workspace. |

---

## Isomorphic Starter Workspace

These commands only take effect on the isomorphic-starter workspace.

| Command              | Description                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| `pnpm starter:dev`   | Launches only the isomorphic-starter workspace. Access at `http://localhost:3002`.             |
| `pnpm starter:lint`  | Checks code for syntax and adherence to coding standards.                                      |
| `pnpm starter:build` | Creates an optimized production build in the `.next` folder.                                   |
| `pnpm starter:start` | Starts the application in production mode at `http://localhost:3002`.                          |
| `pnpm starter:clean` | Removes `node_modules`, `.next`, `.cache`, and `.turbo` from the isomorphic-starter workspace. |

---

## Isomorphic DnD Workspace

These commands only take effect on the isomorphic-dnd workspace.

| Command          | Description                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `pnpm dnd:dev`   | Launches only the isomorphic-dnd workspace. Access at `http://localhost:3003`.             |
| `pnpm dnd:lint`  | Checks code for syntax and adherence to coding standards.                                  |
| `pnpm dnd:build` | Creates an optimized production build in the `.next` folder.                               |
| `pnpm dnd:start` | Starts the application in production mode at `http://localhost:3003`.                      |
| `pnpm dnd:clean` | Removes `node_modules`, `.next`, `.cache`, and `.turbo` from the isomorphic-dnd workspace. |

---

## More Scripts

Additional custom commands for different use cases.

| Command                              | Description                                                                                                                                                                         |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm cache:clean`                   | Removes all cache and build files named `.turbo`, `.build`, and `.cache`.                                                                                                           |
| `pnpm add react --filter=isomorphic` | Installs packages into individual workspaces. [Learn More](https://turbo.build/repo/docs/crafting-your-repository/managing-dependencies#best-practices-for-dependency-installation) |
| `pnpm gen-icons`                     | Generates icons data from the icons store `packages/isomorphic-core/src/components/icons` into `data/icons-data.ts`.                                                                |

---

_Previous: [Introduction](/) | Next: [Theming](/getting-started/theming)_
