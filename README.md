# Syncfusion React Gantt in Next.js

This repository demonstrates a simple Next.js application that uses the Syncfusion React Gantt component.

## Overview

A small Next.js demo that renders a Syncfusion Gantt chart with hierarchical tasks, dependencies, resources, editing, filtering, and sorting. The page is defined in `src/app/page.tsx` and sample task data is stored in `src/app/datasource.tsx`.

## Features

- `GanttComponent` from `@syncfusion/ej2-react-gantt`
- Task mapping for IDs, names, dates, duration, progress, dependencies, and resources
- `Edit`, `Filter`, and `Sort` services enabled
- Sample data includes subtasks and project resources

## Files of interest

- `src/app/page.tsx` — renders the Gantt chart
- `src/app/datasource.tsx` — sample task data and resources
- `src/app/layout.tsx` — root layout file

## Prerequisites

- Node.js 18+
- npm

## Installation

Install dependencies from the project root:

```bash
npm install
```

## Run locally

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

Build the app for production:

```bash
npm run build
```

## Notes

- Uses `next`, `react`, and `@syncfusion/ej2-react-gantt`.
- Task data is hardcoded in `src/app/datasource.tsx`.
- The example enables editable taskbars, resource labels, and dependencies.
