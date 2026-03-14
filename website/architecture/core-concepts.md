---
id: concept-overview
title: Concept Overview
slug: /concept-overview
---

# Installation

## Requirements

Before you begin, ensure that your computer has the following software
installed:

- `nodejs` (20.16.0 or later)
- `pnpm` (Node package manager) -- recommended
- `Visual Studio Code` -- recommended

---

## Installation

### Setting Environment Variables

1.  Open your terminal and navigate to one of the workspace folders:
    - `apps/isomorphic`
    - `apps/isomorphic-intl`
    - `apps/isomorphic-starter`

2.  Run this command to copy the example environment file into
    `.env.local`:

    ```bash
    cp .env.local.example .env.local
    ```

3.  Open the newly created `.env.local` file and fill in the following
    environment variables:
    - `NEXT_PUBLIC_GOOGLE_MAP_API_KEY` (optional --- only required if
      using Google Maps)
    - `NEXTAUTH_SECRET` (generate a random 32-character base64 string)
    - `NEXTAUTH_URL` (your project's base URL --- usually
      `http://localhost:3000` in dev)
    - `GOOGLE_CLIENT_ID` (Google API client ID --- for Google
      authentication)
    - `GOOGLE_CLIENT_SECRET` (Google client secret --- for Google
      authentication)

    You can generate a secret using:

    ```bash
    openssl rand -base64 32
    ```

---

## Install Dependencies & Run

From the project root directory:

```bash
pnpm install
pnpm dev
```

This will:

- Install all necessary dependencies into `node_modules`
- Launch all workspaces in development mode

You will then have access to local development servers such as:

- `http://localhost:3000`
- `http://localhost:3001`
- `http://localhost:3002`
- `http://localhost:3003`

---

## Available Scripts

These commands work across all workspaces:

---

Command Description

---

`pnpm lint` Runs ESLint and shows
warnings/errors

`pnpm build` Builds all workspaces and
generates `.next` folders

`pnpm start` Starts production build for all
workspaces

`pnpm clean` Removes `node_modules`,
`.next`, and `.cache` folders

---

---

## Workspace-Specific Scripts

### Isomorphic workspace

---

Script Description

---

`pnpm iso:dev` Launches the main isomorphic workspace

`pnpm iso:lint` Lints only the main isomorphic workspace

`pnpm iso:build` Builds only the main isomorphic workspace

`pnpm iso:start` Starts production build for the isomorphic
workspace

`pnpm iso:clean` Cleans cache for the isomorphic workspace

---

---

### Isomorphic Intl workspace

Script Description

---

`pnpm intl:dev` Dev server for the intl workspace
`pnpm intl:lint` Lint the intl workspace
`pnpm intl:build` Build the intl workspace
`pnpm intl:start` Start production for intl workspace
`pnpm intl:clean` Clean workspace build artifacts

---

### Isomorphic Starter workspace

Script Description

---

`pnpm starter:dev` Dev server for the starter workspace
`pnpm starter:lint` Lint the starter workspace
`pnpm starter:build` Build the starter workspace
`pnpm starter:start` Start production server for starter workspace
`pnpm starter:clean` Clean build artifacts

---

### Isomorphic dnd workspace

Script Description

---

`pnpm dnd:dev` Dev server for dnd workspace
`pnpm dnd:lint` Lint the dnd workspace
`pnpm dnd:build` Build the dnd workspace
`pnpm dnd:start` Start production server for dnd workspace
`pnpm dnd:clean` Clean build artifacts for dnd workspace
