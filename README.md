# Syncfusion React Gantt in Next.js

This repository contains a simple Next.js application that demonstrates usage of the Syncfusion React Gantt component to visualize and manage project schedules.

## Overview

This sample showcases a Next.js application using the App Router to render a Syncfusion Gantt chart with hierarchical tasks, dependencies, resources, and built-in editing, filtering, and sorting features. The main page is in `src/app/page.tsx` and sample data is defined in `src/app/datasource.tsx`.

## Features

- **Task field mapping**: Task ID, name, start/end dates, duration, progress, dependencies, and resource assignment
- **Built‑in support**: Editing, filtering, and sorting capabilities
- **Hierarchical tasks**: Parent and child tasks with shared resources

## Key Files

- `src/app/page.tsx` — Renders the Gantt chart and configures services
- `src/app/datasource.tsx` — Sample hierarchical task and resource data
- `src/app/layout.tsx` — Root layout file for the App Router

## Prerequisites

- Node.js (LTS or later)
- npm

Compatible with modern versions of Next.js and React.

## Installation

From the project root directory:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

Create a production build:

```bash
npm run build
```

## Technologies

- `next` — React framework
- `react` — UI library
- `@syncfusion/ej2-react-gantt` — Gantt chart component

## Notes

Task and resource data are statically defined for demonstration. The example enables task editing, resource labels, and dependency links, focusing on client‑side usage of the React Gantt component within a Next.js App Router setup.
