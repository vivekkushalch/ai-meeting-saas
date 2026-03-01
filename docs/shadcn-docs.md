### Create New Project with shadcn/ui CLI (Bash)

Source: https://ui.shadcn.com/docs/installation

This command initializes a new project using the `shadcn/create` CLI tool. It guides the user through selecting a preferred framework (e.g., Next.js, Vite, TanStack Start), icon library, and theme, setting up a complete application with shadcn/ui components.

```bash
npx shadcn@latest create
```

--------------------------------

### Install Input OTP component using CLI or npm

Source: https://ui.shadcn.com/docs/components/base/input-otp

These commands provide two methods for installing the Input OTP component. The first uses `npx shadcn` for shadcn/ui integration, while the second uses `npm install` for direct package installation, allowing users to choose their preferred setup.

```bash
npx shadcn@latest add input-otp
```

```bash
npm install input-otp
```

--------------------------------

### Serve shadcn Registry with Next.js Development Server

Source: https://ui.shadcn.com/docs/registry/getting-started

This command starts the Next.js development server, which will serve your shadcn registry files if your project is configured with Next.js. The registry items will be accessible via specific URLs under `/r/` after the build process.

```bash
npm run dev
```

--------------------------------

### Quick Registry Configuration Setup

Source: https://ui.shadcn.com/docs/registry/namespace

Minimal configuration example for setting up two namespaced registries (v0 and acme) in components.json. This provides a foundation for multi-source resource installation.

```json
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@acme": "https://registry.acme.com/resources/{name}.json"
  }
}
```

--------------------------------

### Initialize shadcn/ui Project with CLI

Source: https://ui.shadcn.com/docs/changelog/2023-06-new-cli

This command initiates the shadcn/ui setup process, guiding the user through configuration questions to generate the `components.json` file, which defines project-specific settings for components, styling, and import paths.

```bash
npx shadcn@latest init
```

--------------------------------

### Installing the Shadcn UI Spinner Component

Source: https://ui.shadcn.com/docs/components/base/spinner

Provides instructions for installing the `Spinner` component. It includes both the command-line interface (CLI) method for quick setup and the manual method, which involves copying the component's source code directly into your project.

```bash
npx shadcn@latest add spinner
```

```tsx
import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
```

--------------------------------

### Install shadcn CLI via npm

Source: https://ui.shadcn.com/docs/registry/getting-started

This command installs the latest version of the shadcn command-line interface (CLI) globally or as a dev dependency in your project. The CLI is essential for building and managing shadcn component registries and components.

```bash
npm install shadcn@latest
```

--------------------------------

### Create New Laravel Project with React

Source: https://ui.shadcn.com/docs/installation/laravel

Initialize a new Laravel project with Inertia and React using the Laravel installer. This command creates a fresh Laravel application with React pre-configured for use with Inertia.js.

```bash
laravel new my-app --react
```

--------------------------------

### Create a new TanStack Start project with shadcn/ui using npm

Source: https://ui.shadcn.com/docs/installation/tanstack

This command initializes a new TanStack Start project. It includes Tailwind CSS for styling and automatically integrates shadcn/ui as an add-on, streamlining the setup process for a new web application.

```bash
npm create @tanstack/start@latest --tailwind --add-ons shadcn
```

--------------------------------

### Install shadcn components from various sources

Source: https://ui.shadcn.com/docs/registry/namespace

Demonstrates how to install shadcn components using the 'add' command. This includes installing from a specific registry, installing multiple resources, installing directly from a URL, and installing from a local file path.

```bash
npx shadcn@latest add @v0/dashboard
```

```bash
npx shadcn@latest add @acme/button @lib/utils @ai/prompt
```

```bash
npx shadcn@latest add https://registry.example.com/button.json
```

```bash
npx shadcn@latest add ./local-registry/button.json
```

--------------------------------

### Install Shadcn UI Context Menu via CLI

Source: https://ui.shadcn.com/docs/components/base/context-menu

Use this command-line interface (CLI) instruction to quickly add the Context Menu component to your project. This method automates the setup process, including dependency installation and component file generation for Shadcn UI.

```bash
npx shadcn@latest add context-menu
```

--------------------------------

### Define Universal Registry Item for Multi-File Template (shadcn/ui)

Source: https://ui.shadcn.com/docs/registry/examples

This JSON configuration defines a shadcn/ui registry item named 'my-custom-start-template' that installs multiple files. It includes two files, each with an explicit target path, demonstrating how to create a universal starter template that can be installed without framework detection or components.json.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-custom-start-template",
  "type": "registry:item",
  "dependencies": ["better-auth"],
  "files": [
    {
      "path": "/path/to/file-01.json",
      "type": "registry:file",
      "target": "~/file-01.json",
      "content": "..."
    },
    {
      "path": "/path/to/file-02.vue",
      "type": "registry:file",
      "target": "~/pages/file-02.vue",
      "content": "..."
    }
  ]
}
```

--------------------------------

### Install Sonner Toast Component

Source: https://ui.shadcn.com/docs/components/base/sonner

Provides instructions and code for installing the Sonner toast component using two methods: the `shadcn/ui` CLI for quick setup, and a manual installation process involving package installation and adding the `Toaster` component to your application's layout. Both methods ensure the `Toaster` is available globally.

```bash
npx shadcn@latest add sonner
```

```tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

```bash
npm install sonner next-themes
```

```tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  )
}
```

--------------------------------

### Install Shadcn Menubar Component via CLI

Source: https://ui.shadcn.com/docs/components/base/menubar

This command installs the Shadcn UI menubar component directly using the `npx shadcn@latest add` command-line interface. It automates the setup process, including adding necessary files and configurations to your project.

```bash
npx shadcn@latest add menubar
```

--------------------------------

### Install Input OTP Component

Source: https://ui.shadcn.com/docs/components/input-otp

Install the Input OTP component from shadcn/ui using the CLI. This command downloads and sets up the component in your project.

```bash
pnpm dlx shadcn@latest add input-otp
```

--------------------------------

### Multiple Registry Setup with Mixed Authentication

Source: https://ui.shadcn.com/docs/components-json

Complete example showing how to configure multiple registries with different authentication methods and parameters. Demonstrates public registries, private registries with bearer tokens, and team registries with versioning and environment variables.

```json
{
  "registries": {
    "@shadcn": "https://ui.shadcn.com/r/{name}.json",
    "@company-ui": {
      "url": "https://registry.company.com/ui/{name}.json",
      "headers": {
        "Authorization": "Bearer ${COMPANY_TOKEN}"
      }
    },
    "@team": {
      "url": "https://team.company.com/{name}.json",
      "params": {
        "team": "frontend",
        "version": "${REGISTRY_VERSION}"
      }
    }
  }
}
```

--------------------------------

### Add Component Definition to shadcn registry.json

Source: https://ui.shadcn.com/docs/registry/getting-started

This JSON snippet shows how to register a component, like `hello-world`, within the `registry.json` file. It includes metadata such as name, type, title, description, and defines the component's file path and type, ensuring it conforms to the registry item schema.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

--------------------------------

### Basic Popover Example with Header and Description

Source: https://ui.shadcn.com/docs/components/base/popover

A simple popover implementation featuring a header with title and description. The popover uses the 'start' alignment for content positioning and includes a button trigger with custom styling. This example demonstrates the minimal structure needed for a functional popover.

```tsx
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverBasic() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" className="w-fit" />}>
          Open Popover
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </>
  )
}
```

--------------------------------

### Install Project Dependencies using npm

Source: https://ui.shadcn.com/docs/installation/manual

This command installs the necessary npm packages for a shadcn UI project, including `shadcn`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, and `tw-animate-css`. These packages provide styling utilities, component logic, and animation capabilities.

```bash
npm install shadcn class-variance-authority clsx tailwind-merge lucide-react tw-animate-css
```

--------------------------------

### Install Dependencies with pnpm

Source: https://ui.shadcn.com/docs/blocks

Installs project dependencies using pnpm package manager. Required before starting development on the block.

```bash
pnpm install
```

--------------------------------

### Install Input OTP Component - Bash

Source: https://ui.shadcn.com/docs/components/radix/input-otp

Command-line installation of the Input OTP component using shadcn CLI. Automatically sets up all dependencies and component files in the project.

```bash
npx shadcn@latest add input-otp
```

--------------------------------

### Initialize a new Shadcn UI project with RTL support using CLI

Source: https://ui.shadcn.com/docs/changelog/2026-01-rtl

This Bash command initializes a new Shadcn UI project with Right-to-Left (RTL) support enabled from the start. The `--rtl` flag configures the project to handle RTL layouts automatically during the setup process.

```bash
npx shadcn@latest init --rtl
```

--------------------------------

### Install Carousel via CLI or NPM

Source: https://ui.shadcn.com/docs/components/base/carousel

Installation instructions for the carousel component. Use the CLI command for automated setup or manually install the embla-carousel-react dependency and copy component files.

```bash
npx shadcn@latest add carousel
```

```bash
npm install embla-carousel-react
```

--------------------------------

### Install Block and Override Primitives in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Configure a registry item to install a block from shadcn/ui and override default primitives with custom implementations from remote registries. This enables centralized dependency management for component hierarchies.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-login",
  "type": "registry:block",
  "registryDependencies": [
    "login-01",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json"
  ]
}
```

--------------------------------

### Install `cmdk` Dependency via npm

Source: https://ui.shadcn.com/docs/components/base/command

This snippet provides the npm command to install the core `cmdk` library, which is a foundational dependency for the shadcn/ui Command component. It is a prerequisite for manual setup of the command menu.

```bash
npm install cmdk
```

--------------------------------

### Create Remix Project with create-remix

Source: https://ui.shadcn.com/docs/installation/remix

Initialize a new Remix project using the create-remix command-line tool. This sets up the basic Remix application structure and dependencies.

```bash
npx create-remix@latest my-app
```

--------------------------------

### Install Shadcn UI Resizable Component (CLI)

Source: https://ui.shadcn.com/docs/components/base/resizable

Provides the command-line interface (CLI) command to quickly add the Resizable component to your project using the `shadcn@latest` utility. This is the recommended installation method for Shadcn UI components.

```bash
npx shadcn@latest add resizable
```

--------------------------------

### Initialize shadcn/ui Project with Next.js

Source: https://ui.shadcn.com/docs/installation/next

Initialize a new Next.js project or configure an existing one with shadcn/ui using the init command. This sets up the necessary configuration and dependencies for using shadcn/ui components. Supports both standalone Next.js projects and monorepo setups.

```bash
npx shadcn@latest init
```

--------------------------------

### Manually install @base-ui/react dependency

Source: https://ui.shadcn.com/docs/components/base/aspect-ratio

For manual installation, this command installs the `@base-ui/react` package, which is a prerequisite for the `AspectRatio` component. Ensure this dependency is installed before copying the component's source code into your project.

```bash
npm install @base-ui/react
```

--------------------------------

### Example Secure Custom Registry Configuration (JSON)

Source: https://ui.shadcn.com/docs/registry/namespace

This snippet provides an example of a comprehensive secure custom registry setup in `components.json`. It includes a URL, authorization using an environment variable, and a custom header, adhering to best practices for registry operators.

```json
{
  "@company": {
    "url": "https://registry.company.com/v1/{name}.json",
    "headers": {
      "Authorization": "Bearer ${COMPANY_TOKEN}",
      "X-Registry-Version": "1.0"
    }
  }
}
```

--------------------------------

### Install Recharts Dependency

Source: https://ui.shadcn.com/docs/components/base/chart

NPM installation command for Recharts library, which is the underlying charting library used by the chart components. Required for manual installation setup.

```bash
npm install recharts
```

--------------------------------

### Execute shadcn Registry Build Script

Source: https://ui.shadcn.com/docs/registry/getting-started

This command runs the `registry:build` script defined in `package.json`. Executing this script triggers the shadcn CLI to generate the registry JSON files, typically placed in a `public/r` directory by default.

```bash
npm run registry:build
```

--------------------------------

### Define Initial shadcn registry.json Structure

Source: https://ui.shadcn.com/docs/registry/getting-started

This JSON snippet illustrates the basic structure for a `registry.json` file, which serves as the entry point for a shadcn component registry. It includes the schema reference, registry name, homepage URL, and an empty array for registry items, conforming to the specified registry schema.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    // ...
  ]
}
```

--------------------------------

### Install `direction` component via shadcn CLI

Source: https://ui.shadcn.com/docs/components/base/direction

Use this command-line interface (CLI) snippet to quickly add the `direction` component to your project using the `shadcn` utility. This method simplifies integration into existing shadcn-based setups.

```bash
npx shadcn@latest add direction
```

--------------------------------

### Install the Shadcn Input component (Bash)

Source: https://ui.shadcn.com/docs/components/base/input

Provides instructions for adding the `Input` component to a project using the Shadcn CLI. This is the recommended and most straightforward method for integrating Shadcn UI components.

```bash
npx shadcn@latest add input
```

--------------------------------

### Install shadcn/ui Table Component and TanStack React Table Dependencies (pnpm)

Source: https://ui.shadcn.com/docs/components/data-table

These commands install the necessary packages for building a custom data table. The first command adds the shadcn/ui Table component using its CLI, while the second installs the core @tanstack/react-table library, which provides headless UI logic for table functionalities.

```bash
pnpm dlx shadcn@latest add table
```

```bash
pnpm add @tanstack/react-table
```

--------------------------------

### Install Shadcn UI Tabs Component via CLI

Source: https://ui.shadcn.com/docs/components/base/tabs

This command-line interface (CLI) snippet shows how to quickly add the Shadcn UI Tabs component to your project using the `npx shadcn@latest add tabs` command. This is the recommended method for automated installation and setup, handling dependencies and component files.

```bash
npx shadcn@latest add tabs
```

--------------------------------

### Configure shadcn Build Script in package.json

Source: https://ui.shadcn.com/docs/registry/getting-started

This JSON snippet updates the `package.json` file by adding a `registry:build` script. This script executes the `shadcn build` command, which is used to generate the necessary JSON files for the component registry.

```json
{
  "scripts": {
    "registry:build": "shadcn build"
  }
}
```

--------------------------------

### Install Select Component via CLI

Source: https://ui.shadcn.com/docs/components/base/select

Install the Select component using the shadcn CLI tool. This command downloads and configures the component in your project automatically.

```bash
npx shadcn@latest add select
```

--------------------------------

### Install Shadcn UI Accordion component using CLI or npm

Source: https://ui.shadcn.com/docs/components/base/accordion

Provides instructions for installing the Shadcn UI Accordion component using either the `npx shadcn@latest add` command-line interface or manual dependency installation via npm. Manual installation also requires copying the component's source code into your project.

```bash
npx shadcn@latest add accordion
```

```bash
npm install @base-ui/react
```

--------------------------------

### Install Command Component using shadcn/ui CLI

Source: https://ui.shadcn.com/docs/components/base/command

This command-line snippet shows how to add the `command` component to your project using the shadcn/ui CLI. It simplifies the installation process by automatically fetching and configuring the necessary component files.

```bash
npx shadcn@latest add command
```

--------------------------------

### Add Components to Monorepo Workspace

Source: https://ui.shadcn.com/docs/monorepo

Add shadcn/ui components to your monorepo application by navigating to the app directory and running the add command. The CLI automatically determines component type and installs files to correct paths with proper import handling.

```bash
cd apps/web
npx shadcn@latest add [COMPONENT]
```

--------------------------------

### Install Resources from Namespaced Registries

Source: https://ui.shadcn.com/docs/components-json

Install components and resources using the namespace syntax after configuring registries. Supports installing from public registries, private authenticated registries, and multiple resources in a single command.

```bash
# Install from a configured registry
npx shadcn@latest add @v0/dashboard

# Install from private registry
npx shadcn@latest add @private/button

# Install multiple resources
npx shadcn@latest add @acme/header @internal/auth-utils
```

--------------------------------

### Install remote components from URL

Source: https://ui.shadcn.com/docs/changelog/2024-08-npx-shadcn-init

Install components from a remote registry using a URL. This feature enables distribution of custom component registries and private components. The URL should point to a valid component registry JSON file.

```bash
npx shadcn add https://acme.com/registry/navbar.json
```

--------------------------------

### Handle `shadcn/ui` Initialization with React 19 Peer Dependency Prompt (npm)

Source: https://ui.shadcn.com/docs/react-19

This `bash` snippet illustrates the interactive prompt from the `shadcn/ui` CLI when initializing a project (`npx shadcn@latest init -d`) while using React 19 with `npm`. It guides users to select a resolution strategy, either `--force` or `--legacy-peer-deps`, to address potential peer dependency conflicts during the shadcn/ui installation process.

```bash
It looks like you are using React 19.
Some packages may fail to install due to peer dependency issues (see https://ui.shadcn.com/react-19).

? How would you like to proceed? › - Use arrow-keys. Return to submit.
❯   Use --force
    Use --legacy-peer-deps
```

--------------------------------

### Example Output of `shadcn diff` Command

Source: https://ui.shadcn.com/docs/changelog/2023-06-new-cli

This text output demonstrates the result of running `npx shadcn diff`, showing a list of components that have updates available. For each component, it specifies the component name and the file paths of its associated files within the project.

```txt
The following components have updates available:
- button
  - /path/to/my-app/components/ui/button.tsx
- toast
  - /path/to/my-app/components/ui/use-toast.ts
  - /path/to/my-app/components/ui/toaster.tsx
```

--------------------------------

### Install Drawer Component via CLI

Source: https://ui.shadcn.com/docs/components/base/drawer

Install the Drawer component using the shadcn CLI tool. This command downloads and sets up the drawer component with all dependencies in your project.

```bash
npx shadcn@latest add drawer
```

--------------------------------

### Implement a Shadcn UI Navigation Menu in React

Source: https://ui.shadcn.com/docs/components/base/navigation-menu

This React component demonstrates how to construct a comprehensive navigation menu using Shadcn UI's `NavigationMenu` primitives. It includes examples of nested dropdowns for 'Getting started' and 'Components' sections, a menu with icons, and a direct link, integrating with Next.js's `Link` component for client-side navigation. The component relies on Shadcn UI for styling and functionality, and `lucide-react` for icons.

```tsx
"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built with Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleAlertIcon />
                  Backlog
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleDashedIcon />
                  To Do
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleCheckIcon />
                  Done
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/docs" />}
            className={navigationMenuTriggerStyle()}
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href} />}>
        <div className="flex flex-col gap-1 text-sm">

```

--------------------------------

### Complete Bar Chart with Legend Example (TypeScript/TSX)

Source: https://ui.shadcn.com/docs/components/base/chart

Provides a full, runnable example of a `BarChart` component including data, configuration, and integrated legend. This snippet showcases the complete setup for rendering a chart with `ChartLegend` and `ChartLegendContent` components, demonstrating data structure, chart configuration, and component rendering.

```tsx
"use client"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function ChartBarDemoLegend() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

--------------------------------

### Define reusable registry block with components

Source: https://ui.shadcn.com/docs/registry/examples

Create a registry block item that bundles multiple related files (pages and components) with their dependencies. This block specifies registry dependencies on other components and defines file paths with content references for installation into target locations in the project structure.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "login-01",
  "type": "registry:block",
  "description": "A simple login form.",
  "registryDependencies": ["button", "card", "input", "label"],
  "files": [
    {
      "path": "blocks/login-01/page.tsx",
      "content": "import { LoginForm } ...",
      "type": "registry:page",
      "target": "app/login/page.tsx"
    },
    {
      "path": "blocks/login-01/components/login-form.tsx",
      "content": "...",
      "type": "registry:component"
    }
  ]
}
```

--------------------------------

### Comprehensive Empty Component Example with Header and Multiple Actions (TSX)

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This snippet presents a more complex `Empty` component setup, utilizing `EmptyHeader` to group media, title, and description. It demonstrates how to incorporate multiple buttons for different actions and a link within the `EmptyContent`, ideal for 'no projects' or similar states.

```tsx
import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty"

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>Create Project</Button>
          <Button variant="outline">Import Project</Button>
        </div>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  )
}
```

--------------------------------

### Install Navigation Menu Component via CLI

Source: https://ui.shadcn.com/docs/components/base/navigation-menu

Quick installation command for adding the navigation-menu component to a shadcn/ui project using the CLI tool. This is the recommended installation method.

```bash
npx shadcn@latest add navigation-menu
```

--------------------------------

### Install Components from Multiple Namespaced Registries

Source: https://ui.shadcn.com/docs/changelog/2025-08-cli-3-mcp

Use the CLI to install components from different namespaced registries in a single command. The @registry/name format allows installing from community, private, or internal registries.

```bash
npx shadcn add @acme/button @internal/auth-system
```

--------------------------------

### Install Tooltip Component via CLI

Source: https://ui.shadcn.com/docs/components/base/tooltip

Installs the tooltip component using the shadcn CLI tool. This command downloads and sets up the tooltip component with all required dependencies from the Base UI library.

```bash
npx shadcn@latest add tooltip
```

--------------------------------

### Install Kbd Component via CLI

Source: https://ui.shadcn.com/docs/components/base/kbd

Command to install the Kbd component using the shadcn CLI tool. This is the recommended installation method for adding the component to a shadcn/ui project.

```bash
npx shadcn@latest add kbd
```

--------------------------------

### Install Toggle Component via Shadcn CLI (Bash)

Source: https://ui.shadcn.com/docs/components/base/toggle

Provides the command-line interface command to add the `Toggle` component using the `shadcn@latest` tool, simplifying the installation process.

```bash
npx shadcn@latest add toggle
```

--------------------------------

### RTL Configuration Example

Source: https://ui.shadcn.com/docs/components/radix/native-select

Complete example demonstrating RTL support with multilingual translations for English, Arabic, and Hebrew languages using the NativeSelect component.

```APIDOC
## RTL Configuration with Translations

### Description
Implementation example showing how to configure NativeSelect with RTL support and multilingual translations.

### Translations Object Structure
```tsx
const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      placeholder: "Select status",
      todo: "Todo",
      inProgress: "In Progress",
      done: "Done",
      cancelled: "Cancelled"
    }
  },
  ar: {
    dir: "rtl",
    values: {
      placeholder: "اختر الحالة",
      todo: "مهام",
      inProgress: "قيد التنفيذ",
      done: "منجز",
      cancelled: "ملغي"
    }
  },
  he: {
    dir: "rtl",
    values: {
      placeholder: "בחר סטטוס",
      todo: "לעשות",
      inProgress: "בתהליך",
      done: "הושלם",
      cancelled: "בוטל"
    }
  }
}
```

### Component Implementation
```tsx
export function NativeSelectRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <NativeSelect dir={dir}>
      <NativeSelectOption value="">{t.placeholder}</NativeSelectOption>
      <NativeSelectOption value="todo">{t.todo}</NativeSelectOption>
      <NativeSelectOption value="in-progress">{t.inProgress}</NativeSelectOption>
      <NativeSelectOption value="done">{t.done}</NativeSelectOption>
      <NativeSelectOption value="cancelled">{t.cancelled}</NativeSelectOption>
    </NativeSelect>
  )
}
```

### Configuration
- **dir**: Set to "rtl" for right-to-left languages (Arabic, Hebrew) or "ltr" for left-to-right (English)
- **useTranslation Hook**: Manages language selection and provides translated text and direction
- **Default Language**: Arabic ("ar") in the example
```

--------------------------------

### Install React Resizable Panels Dependency (NPM)

Source: https://ui.shadcn.com/docs/components/base/resizable

Shows the npm command to manually install the core `react-resizable-panels` library. This dependency is required if you are not using the Shadcn UI CLI for installation.

```bash
npm install react-resizable-panels
```

--------------------------------

### CLI `init` Command Configuration Prompts

Source: https://ui.shadcn.com/docs/changelog/2023-06-new-cli

This output illustrates the interactive prompts presented when running `npx shadcn@latest init`. Users are asked to define preferences such as style, base color, global CSS file location, use of CSS variables, Tailwind config path, import aliases, and React Server Components usage.

```txt
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › app/globals.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes
```

--------------------------------

### Install Switch Component via shadcn CLI (Bash)

Source: https://ui.shadcn.com/docs/components/base/switch

Provides the command-line interface (CLI) command to add the `Switch` component to a project using the `shadcn/ui` CLI tool. This is the recommended method for quick installation of shadcn/ui components.

```bash
npx shadcn@latest add switch
```

--------------------------------

### Initialize shadcn CLI with components

Source: https://ui.shadcn.com/docs/changelog/2024-08-npx-shadcn-init

Initialize a new shadcn project with specified components using the npx CLI. This command performs framework detection and can initialize a brand new Next.js app in one command. Supports installing multiple components in a single initialization.

```bash
npx shadcn init sidebar-01 login-01
```

--------------------------------

### View shadcn component details

Source: https://ui.shadcn.com/docs/registry/namespace

Explains how to inspect registry items before installation using the 'view' command. This allows users to see resource metadata, dependencies, file contents, and configuration details for single or multiple resources, or from a URL.

```bash
npx shadcn@latest view @acme/button
```

```bash
npx shadcn@latest view @v0/dashboard @shadcn/card
```

```bash
npx shadcn@latest view https://registry.example.com/button.json
```

--------------------------------

### Initialize shadcn Project with init Command

Source: https://ui.shadcn.com/docs/cli

The init command sets up a new shadcn project by installing dependencies, adding the cn utility, and configuring CSS variables. It supports template selection, base color configuration, and directory structure options. Use the --force flag to overwrite existing configurations.

```bash
npx shadcn@latest init
```

```bash
Usage: shadcn init [options] [components...]

initialize your project and install dependencies

Arguments:
  components         name, url or local path to component

Options:
  -t, --template <template>      the template to use. (next, next-monorepo)
  -b, --base-color <base-color>  the base color to use. (neutral, gray, zinc, stone, slate)
  -y, --yes                      skip confirmation prompt. (default: true)
  -f, --force                    force overwrite of existing configuration. (default: false)
  -c, --cwd <cwd>                the working directory. defaults to the current directory.
  -s, --silent                   mute output. (default: false)
  --src-dir                      use the src directory when creating a new project. (default: false)
  --no-src-dir                   do not use the src directory when creating a new project.
  --css-variables                use css variables for theming. (default: true)
  --no-css-variables             do not use css variables for theming.
  --no-base-style                do not install the base shadcn style
  -h, --help                     display help for command
```

--------------------------------

### Install shadcn/ui component from registry using npx

Source: https://ui.shadcn.com/docs/changelog/2025-09-registry-index

This command demonstrates how to install a specific component, `@ai-elements/prompt-input`, from an open-source registry using `npx shadcn add`. It automatically updates the project's `components.json` file, simplifying component integration without manual configuration. This method streamlines the process of adding new UI elements to a project.

```bash
npx shadcn add @ai-elements/prompt-input
```

--------------------------------

### Configure Shadcn UI components.json file

Source: https://ui.shadcn.com/docs/installation/manual

This JSON configuration file defines the core settings for a Shadcn UI project. It specifies the UI style, whether React Server Components (RSC) are used, TypeScript (tsx) preference, Tailwind CSS integration details (config path, base color, prefix), and crucial path aliases for components, utilities, and hooks. This setup ensures consistent project structure and styling.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "radix-nova",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

--------------------------------

### Install Noto Sans Arabic Font via Fontsource

Source: https://ui.shadcn.com/docs/rtl/start

Install the Noto Sans Arabic variable font package from Fontsource to provide proper RTL language support. This font family works well with Inter and Geist for comprehensive language coverage.

```bash
npm install @fontsource-variable/noto-sans-arabic
```

--------------------------------

### Install Radix UI Dependency - Bash

Source: https://ui.shadcn.com/docs/components/radix/aspect-ratio

NPM installation command for the Radix UI library, which is the underlying dependency for the AspectRatio component when manually installing.

```bash
npm install radix-ui
```

--------------------------------

### Install the Spinner component using Shadcn CLI (Bash)

Source: https://ui.shadcn.com/docs/components/radix/spinner

This command provides the recommended method for adding the `Spinner` component to your project using the Shadcn UI command-line interface. Executing this command will automatically set up the component and its dependencies.

```bash
npx shadcn@latest add spinner
```

--------------------------------

### Implement Input Groups with Various Icons in TSX

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This comprehensive example showcases several `InputGroup` configurations, integrating different icons from `lucide-react` as addons. It demonstrates how to place icons at the start or end of inputs, and how to combine multiple addons (e.g., `CreditCardIcon` and `CheckIcon`) for richer input field designs.

```tsx
import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupIcon() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="Enter your email" />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <CheckIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <StarIcon />
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Example `components.json` Configuration File

Source: https://ui.shadcn.com/docs/changelog/2023-06-new-cli

This JSON snippet provides a sample `components.json` file, which stores all project-specific configurations for shadcn/ui components. It includes settings for the chosen style, Tailwind CSS integration details (config, CSS path, base color, CSS variables), React Server Components (RSC) preference, and import aliases for utilities and components.

```json
{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "rsc": false,
  "aliases": {
    "utils": "~/lib/utils",
    "components": "~/components"
  }
}
```

--------------------------------

### Install Item Component - Bash CLI

Source: https://ui.shadcn.com/docs/components/base/item

Command-line installation method for adding the Item component to a shadcn project. Uses the shadcn CLI tool to automatically download and install the component with all dependencies.

```bash
npx shadcn@latest add item
```

--------------------------------

### CLI npx shadcn@latest add

Source: https://ui.shadcn.com/docs/registry/namespace

Installs components or resources from a specified registry, URL, or local file path into your project. It supports installing single or multiple items simultaneously.

```APIDOC
## CLI npx shadcn@latest add

### Description
Installs components or resources from a specified registry, URL, or local file path into your project. It supports installing single or multiple items simultaneously.

### Method
CLI

### Endpoint
`npx shadcn@latest add [resource_identifier...]`

### Parameters
#### Path Parameters
- **resource_identifier** (string) - Required - One or more identifiers for the resource(s) to install. This can be a registry-prefixed name (e.g., `@v0/dashboard`), a direct URL to a `.json` file, or a local file path.

#### Query Parameters
(None)

#### Request Body
(Not applicable for CLI command)

### Request Example
```bash
npx shadcn@latest add @v0/dashboard
npx shadcn@latest add @acme/button @lib/utils @ai/prompt
npx shadcn@latest add https://registry.example.com/button.json
npx shadcn@latest add ./local-registry/button.json
```

### Response
#### Success Response (CLI Output)
The command typically outputs success messages indicating that the components have been added and any necessary configurations updated.

#### Response Example
```txt
✔ Files generated.
```
```

--------------------------------

### Start Development Server with pnpm

Source: https://ui.shadcn.com/docs/blocks

Starts the development server for the www application at http://localhost:3333. Enables live preview of blocks during development.

```bash
pnpm www:dev
```

--------------------------------

### Add all shadcn/ui components using npx

Source: https://ui.shadcn.com/docs/installation/tanstack

This command adds all available shadcn/ui components to the project. It's useful for quickly integrating the entire library, providing a comprehensive set of UI elements without needing to add them individually.

```bash
npx shadcn@latest add --all
```

--------------------------------

### Install Tailwind CSS and Autoprefixer

Source: https://ui.shadcn.com/docs/installation/remix

Install Tailwind CSS and Autoprefixer as development dependencies to enable styling support for shadcn/ui components in your Remix project.

```bash
npm install -D tailwindcss@latest autoprefixer@latest
```

--------------------------------

### Install Shadcn Empty component via CLI (Bash)

Source: https://ui.shadcn.com/docs/components/base/empty

Provides the command-line interface instruction to add the `empty` component to a Shadcn UI project. This is the recommended method for quick installation and integration.

```bash
npx shadcn@latest add empty
```

--------------------------------

### Import and Use Button Component in Next.js

Source: https://ui.shadcn.com/docs/installation/next

Import the Button component from the shadcn/ui library and use it in a Next.js page component. This example demonstrates importing the Button component and rendering it within a functional component in a Next.js application.

```tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

--------------------------------

### Install Input OTP Dependencies - Bash

Source: https://ui.shadcn.com/docs/components/radix/input-otp

Manual npm installation of the input-otp library dependency required for the component to function.

```bash
npm install input-otp
```

--------------------------------

### Install Toggle Group component using Shadcn CLI

Source: https://ui.shadcn.com/docs/components/base/toggle-group

This command-line interface (CLI) snippet shows how to quickly add the Toggle Group component to your project using the `shadcn` CLI tool. It automates the process of fetching and configuring the component files, streamlining the setup for Shadcn UI users.

```bash
npx shadcn@latest add toggle-group
```

--------------------------------

### Installing Progress Component via Shadcn CLI

Source: https://ui.shadcn.com/docs/components/base/progress

This command-line instruction shows how to add the `progress` component to your project using the `shadcn` CLI tool. It automates the process of fetching and integrating the component's files and dependencies into your project structure.

```bash
npx shadcn@latest add progress
```

--------------------------------

### Install shadcn/ui AspectRatio component via CLI

Source: https://ui.shadcn.com/docs/components/base/aspect-ratio

This command provides the recommended method for adding the `aspect-ratio` component to your shadcn/ui project using the command-line interface. Executing this command will automatically set up the component files and dependencies.

```bash
npx shadcn@latest add aspect-ratio
```

--------------------------------

### Alert with RTL Support Example

Source: https://ui.shadcn.com/docs/components/radix/alert

Complete example demonstrating how to implement the Alert component with full RTL (Right-to-Left) support for internationalized applications supporting multiple languages.

```APIDOC
## Alert with RTL Support

### Description
Complete implementation example showing how to use the Alert component with RTL support for internationalized applications.

### Implementation

```tsx
"use client"

import * as React from "react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"

const translations = {
  en: {
    dir: "ltr",
    values: {
      paymentTitle: "Payment successful",
      paymentDescription: "Your payment of $29.99 has been processed. A receipt has been sent to your email address.",
      featureTitle: "New feature available",
      featureDescription: "We've added dark mode support. You can enable it in your account settings.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      paymentTitle: "تم الدفع بنجاح",
      paymentDescription: "تمت معالجة دفعتك البالغة 29.99 دولارًا. تم إرسال إيصال إلى عنوان بريدك الإلكتروني.",
      featureTitle: "ميزة جديدة متاحة",
      featureDescription: "لقد أضفنا دعم الوضع الداكن. يمكنك تفعيله في إعدادات حسابك.",
    },
  },
}

const alerts = [
  {
    icon: CheckCircle2Icon,
    titleKey: "paymentTitle",
    descriptionKey: "paymentDescription",
  },
  {
    icon: InfoIcon,
    titleKey: "featureTitle",
    descriptionKey: "featureDescription",
  },
]

export function AlertRtl() {
  const currentLang = "ar"
  const { dir, values } = translations[currentLang]

  return (
    <div className="grid w-full max-w-md items-start gap-4" dir={dir}>
      {alerts.map((alert, index) => {
        const Icon = alert.icon
        return (
          <Alert key={index}>
            <Icon />
            <AlertTitle>{values[alert.titleKey]}</AlertTitle>
            <AlertDescription>{values[alert.descriptionKey]}</AlertDescription>
          </Alert>
        )
      })}
    </div>
  )
}
```

### RTL Configuration
For complete RTL setup, refer to the [RTL configuration guide](/docs/rtl).
```

--------------------------------

### Install Popover Component via CLI

Source: https://ui.shadcn.com/docs/components/base/popover

Command-line installation method for adding the Popover component to a shadcn project. This is the quickest way to install the component with all dependencies automatically configured.

```bash
npx shadcn@latest add popover
```

--------------------------------

### Install shadcn/ui Textarea component using CLI

Source: https://ui.shadcn.com/docs/components/base/textarea

This command-line snippet shows how to add the Textarea component to a project using the shadcn/ui CLI. It simplifies the installation process by fetching and configuring the component files automatically.

```bash
npx shadcn@latest add textarea
```

--------------------------------

### Inspect Registry Item Payload Before Installation (Bash)

Source: https://ui.shadcn.com/docs/registry/namespace

This command demonstrates how to use the `shadcn` CLI to view the raw payload of a registry item (e.g., `@acme/button`) before installing it. This feature provides transparency, allowing developers to inspect the content being installed.

```bash
npx shadcn@latest view @acme/button
```

--------------------------------

### Install Accordion via CLI - Bash

Source: https://ui.shadcn.com/docs/components/radix/accordion

Command-line installation method for adding the accordion component to a shadcn/ui project. Uses the shadcn CLI tool to automatically download and configure the component.

```bash
npx shadcn@latest add accordion
```

--------------------------------

### Create a Basic shadcn Component in TSX

Source: https://ui.shadcn.com/docs/registry/getting-started

This TypeScript React (TSX) code defines a simple `HelloWorld` component that renders a button with 'Hello World' text. It imports the `Button` component from a local UI library, demonstrating how to structure a component intended for the shadcn registry.

```tsx
import { Button } from "@/components/ui/button"

export function HelloWorld() {
  return <Button>Hello World</Button>
}
```

--------------------------------

### View Registry Item Before Installation

Source: https://ui.shadcn.com/docs/changelog/2025-08-cli-3-mcp

Preview a component from a namespaced registry without installing it. This command displays the component code and all dependencies before committing to installation.

```bash
npx shadcn view @acme/auth-system
```

--------------------------------

### Install Alert Component via CLI

Source: https://ui.shadcn.com/docs/components/base/alert

Install the Alert component and its dependencies using the shadcn CLI. This command automatically adds the component files to your project.

```bash
npx shadcn@latest add alert
```

--------------------------------

### Create TanStack Router Project with shadcn/ui

Source: https://ui.shadcn.com/docs/installation/tanstack-router

Initialize a new TanStack Router project with file-based routing, Tailwind CSS, and shadcn/ui add-ons pre-configured. This command sets up the complete project structure with all necessary dependencies.

```bash
npx create-tsrouter-app@latest my-app --template file-router --tailwind --add-ons shadcn
```

--------------------------------

### Install Combobox Component using Shadcn CLI

Source: https://ui.shadcn.com/docs/components/base/combobox

This command-line instruction shows how to quickly add the Combobox component to your project using the shadcn/ui CLI tool. It simplifies the installation process by automating dependency management and file generation.

```bash
npx shadcn@latest add combobox
```

--------------------------------

### Install Separator Component via CLI

Source: https://ui.shadcn.com/docs/components/base/separator

Command-line installation method for adding the Separator component to a shadcn/ui project. Uses the shadcn CLI tool to automatically download and configure the component.

```bash
npx shadcn@latest add separator
```

--------------------------------

### Add Components to Project with add Command

Source: https://ui.shadcn.com/docs/cli

The add command installs individual components and their dependencies to your project. It supports adding single or multiple components, overwriting existing files, and configuring the installation path. Use --all to add all available components at once.

```bash
npx shadcn@latest add [component]
```

```bash
Usage: shadcn add [options] [components...]

add a component to your project

Arguments:
  components         name, url or local path to component

Options:
  -y, --yes           skip confirmation prompt. (default: false)
  -o, --overwrite     overwrite existing files. (default: false)
  -c, --cwd <cwd>     the working directory. defaults to the current directory.
  -a, --all           add all available components (default: false)
  -p, --path <path>   the path to add the component to.
  -s, --silent        mute output. (default: false)
  --src-dir           use the src directory when creating a new project. (default: false)
  --no-src-dir        do not use the src directory when creating a new project.
  --css-variables     use css variables for theming. (default: true)
  --no-css-variables  do not use css variables for theming.
  -h, --help          display help for command
```

--------------------------------

### Install Vaul Dependency

Source: https://ui.shadcn.com/docs/components/radix/drawer

NPM installation command for the Vaul library, which is the underlying foundation for the Drawer component. Required when manually installing the Drawer component.

```bash
npm install vaul
```

--------------------------------

### Install Single Resource via Namespace

Source: https://ui.shadcn.com/docs/registry/namespace

Install a single resource from a namespaced registry using the CLI. The command references the namespace prefix and resource name, which are resolved to the configured registry URL.

```bash
npx shadcn@latest add @v0/dashboard
```

--------------------------------

### Install Shadcn UI Dropdown Menu via CLI (Bash)

Source: https://ui.shadcn.com/docs/components/base/dropdown-menu

This command-line interface (CLI) snippet demonstrates how to quickly add the Shadcn UI dropdown menu component to your project. It uses `npx shadcn@latest add` for a streamlined installation process.

```bash
npx shadcn@latest add dropdown-menu
```

--------------------------------

### Create custom style extending shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Define a custom registry style that extends shadcn/ui by installing dependencies, adding registry dependencies (components and remote blocks), and configuring CSS variables for fonts and brand colors in light and dark modes. This configuration is applied when running `npx shadcn init`.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "example-style",
  "type": "registry:style",
  "dependencies": ["@tabler/icons-react"],
  "registryDependencies": [
    "login-01",
    "calendar",
    "https://example.com/r/editor.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

--------------------------------

### Environment Variables Setup

Source: https://ui.shadcn.com/docs/registry/authentication

Set registry authentication token in .env.local file. This stores the secret token that will be used for Bearer authentication when accessing private component registries.

```bash
REGISTRY_TOKEN=your_secret_token_here
```

--------------------------------

### Define Payment Data Type and Example Array in TypeScript

Source: https://ui.shadcn.com/docs/components/data-table

This TypeScript code defines the `Payment` interface, specifying the structure for payment objects including `id`, `amount`, `status`, and `email`. It also provides an example array `payments` conforming to this type, used as sample data for the data table.

```typescript
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
 
export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]
```

--------------------------------

### Define Universal Registry Item for ESLint Configuration (shadcn/ui)

Source: https://ui.shadcn.com/docs/registry/examples

This JSON configuration defines a shadcn/ui registry item named 'my-eslint-config' for a custom ESLint configuration. It specifies a single file with an explicit target path (~/.eslintrc.json), enabling universal installation of the ESLint config file without framework dependencies.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-eslint-config",
  "type": "registry:item",
  "files": [
    {
      "path": "/path/to/your/registry/default/custom-eslint.json",
      "type": "registry:file",
      "target": "~/.eslintrc.json",
      "content": "..."
    }
  ]
}
```

--------------------------------

### Configure Plugin with NPM Dependencies in shadcn UI

Source: https://ui.shadcn.com/docs/registry/examples

Shows how to include external npm packages as dependencies when using Tailwind CSS plugins. The `dependencies` array declares required packages, while the `css` object configures both the plugin and custom CSS layers. This pattern ensures all required packages are installed before the component is used.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "typography-component",
  "type": "registry:item",
  "dependencies": ["@tailwindcss/typography"],
  "css": {
    "@plugin \"@tailwindcss/typography\"": {},
    "@layer components": {
      ".prose": {
        "max-width": "65ch"
      }
    }
  }
}
```

--------------------------------

### Install Chart Component via CLI

Source: https://ui.shadcn.com/docs/components/base/chart

Command-line installation method for adding the chart component to a shadcn/ui project. Uses the shadcn CLI tool to automatically download and install the chart component and its dependencies.

```bash
npx shadcn@latest add chart
```

--------------------------------

### List All Components in a Registry

Source: https://ui.shadcn.com/docs/changelog/2025-08-cli-3-mcp

Display all available components from a specific namespaced registry. This command provides a complete inventory of components available for installation.

```bash
npx shadcn list @acme
```

--------------------------------

### Kbd Group Example

Source: https://ui.shadcn.com/docs/components/base/kbd

Demonstrates using the KbdGroup component to group multiple keyboard keys together. Shows how to display keyboard shortcuts within text content, useful for displaying command palette instructions or keyboard shortcuts.

```typescript
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdGroupExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-muted-foreground text-sm">
        Use{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        to open the command palette
      </p>
    </div>
  )
}
```

--------------------------------

### Install Skeleton Component via CLI

Source: https://ui.shadcn.com/docs/components/base/skeleton

Command-line installation method for adding the Skeleton component to a shadcn/ui project. Uses the shadcn CLI tool to automatically download and configure the component with proper dependencies.

```bash
npx shadcn@latest add skeleton
```

--------------------------------

### Install Pagination Component via CLI - Bash

Source: https://ui.shadcn.com/docs/components/base/pagination

Install the pagination component using the shadcn CLI tool. This command downloads and integrates the component into your project with all necessary dependencies.

```bash
npx shadcn@latest add pagination
```

--------------------------------

### Install NativeSelect Component using Shadcn CLI

Source: https://ui.shadcn.com/docs/components/base/native-select

This command-line interface (CLI) snippet shows how to add the `native-select` component to your project using the `shadcn` CLI tool. It simplifies the installation process by automatically adding the necessary files and dependencies. Run this command in your project's root directory.

```bash
npx shadcn@latest add native-select
```

--------------------------------

### Install Collapsible Component via CLI

Source: https://ui.shadcn.com/docs/components/base/collapsible

Command-line installation method for adding the Collapsible component to a shadcn project. Uses the shadcn CLI tool to automatically install dependencies and generate component files.

```bash
npx shadcn@latest add collapsible
```

--------------------------------

### Install Carousel Component via CLI

Source: https://ui.shadcn.com/docs/components/radix/carousel

Command-line installation of the carousel component using shadcn CLI. This is the recommended installation method that automatically adds the carousel component to your project.

```bash
npx shadcn@latest add carousel
```

--------------------------------

### Install Input Group Component - CLI

Source: https://ui.shadcn.com/docs/components/base/input-group

Command-line installation of the input-group component using shadcn package manager. This is the recommended method for adding the component to a project.

```bash
npx shadcn@latest add input-group
```

--------------------------------

### Complex InputGroup with Textarea, Icons, and Buttons (Shadcn UI)

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This example illustrates a more advanced `InputGroup` setup featuring a `InputGroupTextarea` for code input, complete with interactive addons. It integrates icons, text labels, and buttons for actions like running code, refreshing, and copying, demonstrating a rich UI component for interactive code editors or prompt forms. Dependencies include `@tabler/icons-react` for icons and custom `InputGroup` components.

```tsx
import {
  IconBrandJavascript,
  IconCopy,
  IconCornerDownLeft,
  IconRefresh
} from "@tabler/icons-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea
} from "@/components/ui/input-group"

export function InputGroupTextareaExample() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px]"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Run <IconCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <IconBrandJavascript />
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <IconRefresh />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Add Environment Variables to Registry Item JSON

Source: https://ui.shadcn.com/docs/registry/registry-item-json

This JSON configuration specifies environment variables to be added to a project's `.env.local` or `.env` file upon installation. It's intended for development or example variables, and existing variables are not overwritten. Users are cautioned against using this for production environment variables.

```json
{
  "envVars": {
    "NEXT_PUBLIC_APP_URL": "http://localhost:4000",
    "DATABASE_URL": "postgresql://postgres:postgres@localhost:5432/postgres",
    "OPENAI_API_KEY": ""
  }
}
```

--------------------------------

### Import and Use shadcn/ui Switch Component in React

Source: https://ui.shadcn.com/docs/installation/laravel

Import and render the Switch component in a React page component within a Laravel Inertia application. The component is imported from the generated ui directory and can be used like any other React component.

```typescript
import { Switch } from "@/components/ui/switch"

const MyPage = () => {
  return (
    <div>
      <Switch />
    </div>
  )
}

export default MyPage
```

--------------------------------

### Basic Slider Component Implementation

Source: https://ui.shadcn.com/docs/components/base/slider

Creates a simple horizontal slider with a default value of 75, maximum of 100, and step increment of 1. This is the foundational example demonstrating basic slider setup with className styling for responsive width.

```tsx
import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className="mx-auto w-full max-w-xs"
    />
  )
}
```

--------------------------------

### DataTableViewOptions Component Usage - React JSX

Source: https://ui.shadcn.com/docs/components/data-table

Example of how to implement the DataTableViewOptions component in a React application. Pass the configured TanStack React Table instance as the table prop to enable column visibility toggling.

```jsx
<DataTableViewOptions table={table} />
```

--------------------------------

### Render a basic Input component (TypeScript/TSX)

Source: https://ui.shadcn.com/docs/components/base/input

Illustrates the simplest form of the `Input` component, demonstrating how to render it with a placeholder. This example focuses on the core `Input` functionality without additional form elements.

```tsx
import { Input } from "@/components/ui/input"

export function InputBasic() {
  return <Input placeholder="Enter text" />
}
```

--------------------------------

### Install Calendar Dependencies Manually

Source: https://ui.shadcn.com/docs/components/base/calendar

Manual installation of required dependencies for the Calendar component. Installs react-day-picker and date-fns packages which are needed for calendar functionality.

```bash
npm install react-day-picker date-fns
```

--------------------------------

### Install Shadcn UI Button Component via CLI

Source: https://ui.shadcn.com/docs/components/base/button

This command-line interface snippet shows how to quickly add the Shadcn UI button component to your project using the `npx shadcn@latest add` command. This is the recommended method for installation.

```bash
npx shadcn@latest add button
```

--------------------------------

### Install next-themes dependency

Source: https://ui.shadcn.com/docs/dark-mode/next

Installs the `next-themes` library, a dependency required for implementing dark mode functionality in Next.js applications.

```bash
npm install next-themes
```

--------------------------------

### Field with Input Component Example

Source: https://ui.shadcn.com/docs/components/base/field

Complete example of a FieldSet containing multiple input fields with labels and descriptions. Demonstrates username and password fields with helper text and proper accessibility attributes.

```typescript
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldInput() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" type="text" placeholder="Max Leiter" />
          <FieldDescription>
            Choose a unique username for your account.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
          <Input id="password" type="password" placeholder="••••••••" />
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
```

--------------------------------

### LLM Prompt for Updating shadcn/ui Components

Source: https://ui.shadcn.com/docs/changelog/2026-01-inline-side-styles

Comprehensive prompt template for updating multiple shadcn/ui components with inline-start and inline-end Tailwind class support. Includes specific file names, component names, and exact classes to add for Tooltip, Popover, HoverCard, Select, Combobox, DropdownMenu, ContextMenu, and Menubar components.

```txt
Add inline-start and inline-end support to my shadcn/ui components. Add the following Tailwind classes to each component:

| File | Component | Add Classes |
|------|-----------|-------------|
| tooltip.tsx | TooltipContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` |
| tooltip.tsx | TooltipArrow | `data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2
data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2` |
| popover.tsx | PopoverContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` |
| hover-card.tsx | HoverCardContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` |
| select.tsx | SelectContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2
data-[align-trigger=true]:animate-none` and add `data-align-trigger={alignItemWithTrigger}` attribute |
| combobox.tsx | ComboboxContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` |
| dropdown-menu.tsx | DropdownMenuContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` |
| context-menu.tsx | ContextMenuContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` |
| menubar.tsx | MenubarContent | `data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2` |

Add these classes next to the existing `data-[side=top]`, `data-[side=bottom]`, `data-[side=left]`, `data-[side=right]` classes.
```

--------------------------------

### Install Radix UI Dependency - Bash

Source: https://ui.shadcn.com/docs/components/radix/accordion

Installs the Radix UI package as a dependency for the accordion component. Required when manually setting up the accordion component without using the CLI.

```bash
npm install radix-ui
```

--------------------------------

### Complete registry.json Schema Structure

Source: https://ui.shadcn.com/docs/registry/registry-json

Full example of a registry.json file showing all main properties including schema reference, registry metadata, and component items with dependencies and file definitions. This demonstrates the complete structure needed to set up a custom component registry.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "shadcn",
  "homepage": "https://ui.shadcn.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "registryDependencies": [
        "button",
        "@acme/input-form",
        "https://example.com/r/foo"
      ],
      "dependencies": ["is-even@3.0.0", "motion"],
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

--------------------------------

### Install shadcn Sidebar Component via CLI

Source: https://ui.shadcn.com/docs/components/base/sidebar

Command-line installation method for adding the shadcn sidebar component to a project. This is the recommended approach for quickly integrating the sidebar component with all dependencies.

```bash
npx shadcn@latest add sidebar
```

--------------------------------

### Install Badge Component via CLI

Source: https://ui.shadcn.com/docs/components/base/badge

Command-line installation method for adding the Badge component to a shadcn project. Uses the shadcn CLI tool to automatically download and configure the component.

```bash
npx shadcn@latest add badge
```

--------------------------------

### Install Calendar Component via CLI

Source: https://ui.shadcn.com/docs/components/base/calendar

Command-line installation method for adding the Calendar component to a shadcn project. This is the quickest way to set up the component with all required dependencies.

```bash
npx shadcn@latest add calendar
```

--------------------------------

### Define Universal Registry Item for Python Cursor Rules (shadcn/ui)

Source: https://ui.shadcn.com/docs/registry/examples

This JSON configuration defines a shadcn/ui registry item named 'python-rules' for custom Cursor rules. It specifies a single file with an explicit target path (~/.cursor/rules/custom-python.mdc), allowing the rule file to be installed universally without framework detection.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "python-rules",
  "type": "registry:item",
  "files": [
    {
      "path": "/path/to/your/registry/default/custom-python.mdc",
      "type": "registry:file",
      "target": "~/.cursor/rules/custom-python.mdc",
      "content": "..."
    }
  ]
}
```

--------------------------------

### Install Shadcn UI Checkbox Component via CLI

Source: https://ui.shadcn.com/docs/components/base/checkbox

Provides the command-line interface instruction to add the Checkbox component to a project using `npx shadcn@latest`. This is the recommended quick installation method for Shadcn UI components.

```bash
npx shadcn@latest add checkbox
```

--------------------------------

### Configure Column with Sortable Header in React Table

Source: https://ui.shadcn.com/docs/components/data-table

Example configuration for a data table column that uses the DataTableColumnHeader component. Defines an email column with the custom header component that provides sorting and visibility controls.

```typescript
export const columns = [
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
]
```

--------------------------------

### Create TanStack Start Project with RTL Flag

Source: https://ui.shadcn.com/docs/rtl/start

Initialize a new TanStack Start project using the shadcn CLI with the --rtl flag to enable right-to-left language support. This command generates a components.json configuration file with RTL enabled.

```bash
npx shadcn@latest create --template start --rtl
```

--------------------------------

### Install Radio Group Component - CLI

Source: https://ui.shadcn.com/docs/components/base/radio-group

Command-line installation for the radio-group component using shadcn/ui. This is the recommended method for adding the component to a project.

```bash
npx shadcn@latest add radio-group
```

--------------------------------

### Install Card Component via CLI

Source: https://ui.shadcn.com/docs/components/base/card

Install the Card component using the shadcn CLI tool. This command automatically adds the card component and its dependencies to your project.

```bash
npx shadcn@latest add card
```

--------------------------------

### Install Multiple Resources from Different Namespaces

Source: https://ui.shadcn.com/docs/registry/namespace

Install multiple resources from different namespaced registries in a single command. This allows combining resources from various sources (v0, acme, lib, ai) in one operation.

```bash
npx shadcn@latest add @acme/header @lib/auth-utils @ai/chatbot-rules
```

--------------------------------

### Install Sonner via CLI

Source: https://ui.shadcn.com/docs/components/radix/sonner

Command-line installation method for adding Sonner to a shadcn/ui project. This is the quickest way to set up the component with all dependencies.

```bash
npx shadcn@latest add sonner
```

--------------------------------

### Install DirectionProvider Component via CLI

Source: https://ui.shadcn.com/docs/components/radix/direction

Command-line installation method for adding the DirectionProvider component to a shadcn project. This is the quickest way to set up the direction utility component with all necessary dependencies.

```bash
npx shadcn@latest add direction
```

--------------------------------

### Install Sonner Dependencies Manually

Source: https://ui.shadcn.com/docs/components/radix/sonner

Manual installation command for Sonner and its peer dependency next-themes. Use this method when not using the shadcn CLI.

```bash
npm install sonner next-themes
```

--------------------------------

### Install Shadcn UI Alert Dialog component via CLI

Source: https://ui.shadcn.com/docs/components/base/alert-dialog

This command-line interface (CLI) snippet shows how to quickly add the Alert Dialog component to your project using the `npx shadcn` utility. It simplifies the installation process by automatically adding the component files and dependencies.

```bash
npx shadcn@latest add alert-dialog
```

--------------------------------

### Create Full-Featured Context Menu Demo Component

Source: https://ui.shadcn.com/docs/components/radix/context-menu

Demonstrates a complete Context Menu implementation with multiple item types including groups, submenus, checkbox items, radio groups, and keyboard shortcuts. Includes responsive text for pointer-fine and pointer-coarse devices. Shows all available Context Menu features in a single example.

```typescript
export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click here
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press here
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuGroup>
                <ContextMenuItem>Save Page...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked>
            Show Bookmarks
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

--------------------------------

### Install shadcn/ui Chart Component using pnpm

Source: https://ui.shadcn.com/docs/components/chart

This command installs the shadcn/ui chart component into your project using `pnpm`. It leverages `dlx` to execute the `shadcn` CLI, adding the necessary files and dependencies for the chart component.

```shell
pnpm dlx shadcn@latest add chart
```

--------------------------------

### Install Slider Component via CLI

Source: https://ui.shadcn.com/docs/components/base/slider

Command-line installation method for adding the Slider component to a shadcn/ui project. Uses the shadcn CLI tool to automatically download and configure the component.

```bash
npx shadcn@latest add slider
```

--------------------------------

### Create New Astro Project with TailwindCSS

Source: https://ui.shadcn.com/docs/installation/astro

Creates a new Astro project with TailwindCSS, React support, and Git initialization. This command scaffolds the base project structure needed for shadcn/ui integration.

```bash
npx create-astro@latest astro-app  --template with-tailwindcss --install --add react --git
```

--------------------------------

### Install Hover Card Component via CLI

Source: https://ui.shadcn.com/docs/components/base/hover-card

Command-line installation for the hover card component using shadcn package manager. Automatically adds the component and its dependencies to your project.

```bash
npx shadcn@latest add hover-card
```

--------------------------------

### Install Vaul Dependency Manually

Source: https://ui.shadcn.com/docs/components/base/drawer

Install the Vaul library as a dependency when manually setting up the Drawer component. Vaul is the underlying library that powers the drawer functionality.

```bash
npm install vaul
```

--------------------------------

### Basic Context Menu Usage

Source: https://ui.shadcn.com/docs/components/radix/context-menu

Simple implementation of a Context Menu with basic menu items. Demonstrates the minimal setup required: wrapping content with ContextMenu, defining a trigger area, and adding menu items within the content container.

```typescript
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

--------------------------------

### Install Node Types for Vite

Source: https://ui.shadcn.com/docs/installation/vite

Install @types/node as a development dependency. This provides TypeScript type definitions for Node.js modules used in Vite configuration.

```bash
npm install -D @types/node
```

--------------------------------

### Import and use the Input component (TypeScript/TSX)

Source: https://ui.shadcn.com/docs/components/base/input

Shows the necessary import statement for the `Input` component and a minimal example of how to render it in a TSX file. This is the fundamental way to include the component in an application.

```tsx
import { Input } from "@/components/ui/input"
```

```tsx
<Input />
```

--------------------------------

### Install Embla Carousel React Dependency

Source: https://ui.shadcn.com/docs/components/radix/carousel

NPM installation command for the Embla Carousel React library, which is the underlying carousel engine. Required when manually installing the carousel component.

```bash
npm install embla-carousel-react
```

--------------------------------

### Install Field Component via CLI

Source: https://ui.shadcn.com/docs/components/base/field

Install the Field component using the shadcn CLI tool. This command downloads and integrates the component into your project's components/ui directory.

```bash
npx shadcn@latest add field
```

--------------------------------

### Implement a multi-language RTL Card component in React/TypeScript

Source: https://ui.shadcn.com/docs/changelog/2026-01-rtl

This TypeScript/React example demonstrates how to create an RTL-enabled Card component using Shadcn UI components. It includes internationalization (i18n) setup with a custom `useTranslation` hook for English, Arabic, and Hebrew, dynamically setting the `dir` attribute based on the selected language. It showcases a login form within the card, adapting text and layout for RTL languages.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/examples/base/ui-rtl/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/examples/base/ui-rtl/card"
import { Input } from "@/examples/base/ui-rtl/input"
import { Label } from "@/examples/base/ui-rtl/label"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      title: "Login to your account",
      description: "Enter your email below to login to your account",
      signUp: "Sign Up",
      email: "Email",
      emailPlaceholder: "m@example.com",
      password: "Password",
      forgotPassword: "Forgot your password?",
      login: "Login",
      loginWithGoogle: "Login with Google",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      title: "تسجيل الدخول إلى حسابك",
      description: "أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك",
      signUp: "إنشاء حساب",
      email: "البريد الإلكتروني",
      emailPlaceholder: "m@example.com",
      password: "كلمة المرور",
      forgotPassword: "نسيت كلمة المرور؟",
      login: "تسجيل الدخول",
      loginWithGoogle: "تسجيل الدخول باستخدام Google",
    },
  },
  he: {
    dir: "rtl",
    values: {
      title: "התחבר לחשבון שלך",
      description: "הזן את האימייל שלך למטה כדי להתחבר לחשבון שלך",
      signUp: "הירשם",
      email: "אימייל",
      emailPlaceholder: "m@example.com",
      password: "סיסמה",
      forgotPassword: "שכחת את הסיסמה?",
      login: "התחבר",
      loginWithGoogle: "התחבר עם Google",
    },
  },
}

export function CardRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <Card className="w-full max-w-sm" dir={dir}>
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription>{t.description}</CardDescription>
        <CardAction>
          <Button variant="link">{t.signUp}</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email-rtl">{t.email}</Label>
              <Input
                id="email-rtl"
                type="email"
                placeholder={t.emailPlaceholder}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password-rtl">{t.password}</Label>
                <a
                  href="#"
                  className="ms-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  {t.forgotPassword}
                </a>
              </div>
              <Input id="password-rtl" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          {t.login}
        </Button>
        <Button variant="outline" className="w-full">
          {t.loginWithGoogle}
        </Button>
      </CardFooter>
    </Card>
  )
}
```

--------------------------------

### Install Tailwind CSS for Vite

Source: https://ui.shadcn.com/docs/installation/vite

Install Tailwind CSS and the Vite plugin for Tailwind. This enables Tailwind CSS styling in your Vite project.

```bash
npm install tailwindcss @tailwindcss/vite
```

--------------------------------

### Partial Import for shadcn/ui Select Components in Examples

Source: https://ui.shadcn.com/docs/components/select

This partial import statement is frequently seen in shadcn/ui examples to quickly bring in the core 'Select' and 'SelectContent' components. It indicates that further components like 'SelectGroup' or 'SelectItem' would also be imported as needed for the specific example's functionality.

```typescript
import {
  Select,
  SelectContent,
}
```

--------------------------------

### Add X-Axis to Recharts Bar Chart in TypeScript/TSX

Source: https://ui.shadcn.com/docs/components/radix/chart

This snippet demonstrates how to import and integrate the `XAxis` component from Recharts into a Shadcn UI `ChartContainer` to display a horizontal axis for chart data. It includes basic configuration for `dataKey`, `tickLine`, `tickMargin`, `axisLine`, and a `tickFormatter` to customize the axis labels. The full component example shows a complete bar chart setup with an X-axis.

```tsx
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
```

```tsx
<ChartContainer config={chartConfig} className="h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
```

```tsx
"use client"

import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 }
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb"
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa"
  }
} satisfies ChartConfig

export function ChartBarDemoAxis() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

--------------------------------

### Install Button Group Component using Shadcn CLI

Source: https://ui.shadcn.com/docs/components/base/button-group

This command-line interface (CLI) snippet provides instructions for installing the `button-group` component using the `shadcn` CLI tool. It is a quick way to add the component and its dependencies to a project.

```bash
npx shadcn@latest add button-group
```

--------------------------------

### Adding Custom Tailwind Colors

Source: https://ui.shadcn.com/docs/registry/faq

JSON configuration showing how to add custom Tailwind color variables for both light and dark themes using the cssVars property.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    // ...
  ],
  "cssVars": {
    "light": {
      "brand-background": "20 14.3% 4.1%",
      "brand-accent": "20 14.3% 4.1%"
    },
    "dark": {
      "brand-background": "20 14.3% 4.1%",
      "brand-accent": "20 14.3% 4.1%"
    }
  }
}
```

--------------------------------

### Install Shadcn UI Table Component and TanStack Table Dependencies

Source: https://ui.shadcn.com/docs/components/radix/data-table

This snippet provides the necessary commands to set up the Shadcn UI Table component and install the `@tanstack/react-table` library, which is a core dependency for building data tables. These commands should be run in your project's terminal to add the required packages.

```bash
npx shadcn@latest add table
npm install @tanstack/react-table
```

--------------------------------

### Implement a React Navigation Menu with RTL and i18n support

Source: https://ui.shadcn.com/docs/components/base/navigation-menu

This React functional component renders a comprehensive navigation menu using `shadcn/ui`'s `NavigationMenu` components. It integrates `react-i18next` for internationalization and dynamically adjusts layout for Right-to-Left (RTL) languages based on the `dir` property. The menu includes sections for getting started, components, and items with icons, all translated via `t` (translation function).

```tsx
export function NavigationMenuRtl() {
  const { dir, t, language } = useTranslation(translations, "ar")

  return (
    <NavigationMenu dir={dir} align={dir === "rtl" ? "end" : "start"}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t.gettingStarted}</NavigationMenuTrigger>
          <NavigationMenuContent
            dir={dir}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <ul className="w-96">
              <ListItem href="/docs" title={t.introduction}>
                {t.introductionDesc}
              </ListItem>
              <ListItem href="/docs/installation" title={t.installation}>
                {t.installationDesc}
              </ListItem>
              <ListItem href="/docs/primitives/typography" title={t.typography}>
                {t.typographyDesc}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>{t.components}</NavigationMenuTrigger>
          <NavigationMenuContent
            dir={dir}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.titleKey}
                  title={t[component.titleKey]}
                  href={component.href}
                >
                  {t[component.descriptionKey]}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t.withIcon}</NavigationMenuTrigger>
          <NavigationMenuContent
            dir={dir}
            data-lang={dir === "rtl" ? language : undefined}
          >
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleAlertIcon />
                  {t.backlog}
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleDashedIcon />
                  {t.toDo}
                </NavigationMenuLink>
                <NavigationMenuLink
                  render={
                    <Link href="#" className="flex-row items-center gap-2" />
                  }
                >
                  <CircleCheckIcon />
                  {t.done}
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link href="/docs" />}
            className={navigationMenuTriggerStyle()}
            data-lang={dir === "rtl" ? language : undefined}
          >
            {t.docs}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

--------------------------------

### CLI npx shadcn@latest view

Source: https://ui.shadcn.com/docs/registry/namespace

Inspects the details of registry items before installation. This command provides comprehensive information including metadata, dependencies, file contents, CSS variables, Tailwind configuration, and required environment variables.

```APIDOC
## CLI npx shadcn@latest view

### Description
Inspects the details of registry items before installation. This command provides comprehensive information including metadata, dependencies, file contents, CSS variables, Tailwind configuration, and required environment variables.

### Method
CLI

### Endpoint
`npx shadcn@latest view [resource_identifier...]`

### Parameters
#### Path Parameters
- **resource_identifier** (string) - Required - One or more identifiers for the resource(s) to view. This can be a registry-prefixed name (e.g., `@acme/button`), or a direct URL to a `.json` file.

#### Query Parameters
(None)

#### Request Body
(Not applicable for CLI command)

### Request Example
```bash
npx shadcn@latest view @acme/button
npx shadcn@latest view @v0/dashboard @shadcn/card
npx shadcn@latest view https://registry.example.com/button.json
```

### Response
#### Success Response (CLI Output)
The command outputs detailed information about the requested resource(s) to the console.

#### Response Example
```txt
--- Resource Metadata ---
Name: button
Type: registry:ui
Description: A customizable button component.

--- Dependencies ---
- @shadcn/ui/utils

--- File Contents ---
// components/ui/button.tsx
// ... (file content)

--- Tailwind Configuration ---
// tailwind.config.js
// ... (tailwind config)

--- Environment Variables ---
(None)
```
```

--------------------------------

### Basic InputGroup Examples with Text and Textarea Addons (Shadcn UI)

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This snippet demonstrates fundamental usage of the Shadcn UI InputGroup component, showcasing how to combine `InputGroupInput` and `InputGroupTextarea` with `InputGroupAddon` and `InputGroupText` for various input configurations. It includes examples for URL prefixes/suffixes, email domain suffixes, and character count indicators for text areas.

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
} from "@/components/ui/input-group"

export function InputGroupBasicExamples() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" className="!pl-0.5" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter your username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Install Sonner Component using pnpm CLI

Source: https://ui.shadcn.com/docs/components/sonner

This command uses `pnpm` to add the Sonner toast component to a shadcn/ui project. It leverages `dlx` to execute the `shadcn` CLI tool for streamlined component installation.

```bash
pnpm dlx shadcn@latest add sonner
```

--------------------------------

### Create a Basic Popover Component Example in TypeScript/React

Source: https://ui.shadcn.com/docs/components/radix/popover

This TypeScript/React example provides a complete `PopoverBasic` functional component. It renders a simple Popover with a trigger button and content featuring a title and description, serving as a minimal yet fully functional demonstration of the component's usage.

```tsx
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}
```

--------------------------------

### Install shadcn/ui Select Component using pnpm

Source: https://ui.shadcn.com/docs/components/select

This command-line instruction adds the 'Select' component to your shadcn/ui project using the pnpm package manager. It leverages the 'shadcn@latest add' CLI command to integrate the component into your development environment.

```bash
pnpm dlx shadcn@latest add select
```

--------------------------------

### Install Custom Button Component via shadcn CLI

Source: https://ui.shadcn.com/docs/registry/namespace

Command to install a custom component version from a namespaced registry using the shadcn CLI. This overrides the original vendor version with custom configurations.

```bash
npx shadcn@latest add @my-company/custom-button
```

--------------------------------

### Field with Textarea Component Example

Source: https://ui.shadcn.com/docs/components/base/field

Example of a Field component containing a Textarea input for multi-line text entry. Includes label, textarea with placeholder, and helper description text.

```typescript
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function FieldTextarea() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
          <Textarea
            id="feedback"
            placeholder="Your feedback helps us improve..."
            rows={4}
          />
          <FieldDescription>
            Share your thoughts about our service.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
```

--------------------------------

### Alert Demo with Multiple Variants

Source: https://ui.shadcn.com/docs/components/base/alert

Demonstrate multiple alert instances with different icons and messages in a grid layout. This example shows how to combine multiple alerts with success and info icons.

```tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-md items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to
          your email address.
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>
          We&apos;ve added dark mode support. You can enable it in your account
          settings.
        </AlertDescription>
      </Alert>
    </div>
  )
}
```

--------------------------------

### Basic Sidebar Layout Setup in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/sidebar

Sets up a root layout component with SidebarProvider and AppSidebar. The SidebarProvider wraps the application to provide sidebar context, while SidebarTrigger enables toggling the sidebar visibility. This is the recommended entry point for implementing a sidebar in your application.

```tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

--------------------------------

### Add Tooltip to Recharts Bar Chart using Shadcn UI ChartTooltip in TypeScript/TSX

Source: https://ui.shadcn.com/docs/components/radix/chart

This snippet illustrates how to add interactive tooltips to a chart by importing and using the custom `ChartTooltip` and `ChartTooltipContent` components provided by Shadcn UI. It shows the necessary import statement and where to place these components within the `BarChart` structure to enable tooltip functionality. A full component example demonstrates the complete setup with tooltips.

```tsx
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
```

```tsx
<ChartContainer config={chartConfig} className="h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>
```

```tsx
"use client"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 }
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb"
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa"
  }
} satisfies ChartConfig

export function ChartBarDemoTooltip() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

--------------------------------

### Render Example Combobox Component in TypeScript/React

Source: https://ui.shadcn.com/docs/components/base/combobox

This example demonstrates how to render a functional Combobox component with a static list of string frameworks. It sets up the Combobox with an input, content area, empty state, and a list to display selectable items.

```tsx
const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function ExampleCombobox() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
```

--------------------------------

### Install Shadcn UI Dialog Component via CLI

Source: https://ui.shadcn.com/docs/components/base/dialog

This command-line interface snippet provides the recommended method for quickly adding the Shadcn UI Dialog component to your project. Executing this command will automatically configure the necessary files and dependencies.

```bash
npx shadcn@latest add dialog
```

--------------------------------

### Render a complete Empty component example in TypeScript React

Source: https://ui.shadcn.com/docs/components/radix/empty

This example demonstrates a full implementation of the `Empty` component, showcasing its various sub-components like `EmptyHeader`, `EmptyMedia` (with an icon), `EmptyTitle`, `EmptyDescription`, and `EmptyContent` (with multiple buttons). It provides a structured empty state for a 'No Projects Yet' scenario, including a call to action and a 'Learn More' link.

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty"
import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  )
}
```

--------------------------------

### Install Avatar Component via CLI - Bash

Source: https://ui.shadcn.com/docs/components/base/avatar

Install the Avatar component and its dependencies using the shadcn CLI tool. This command downloads and configures the component in your project automatically.

```bash
npx shadcn@latest add avatar
```

--------------------------------

### Create Gatsby Project

Source: https://ui.shadcn.com/docs/installation/gatsby

Initialize a new Gatsby project using the create-gatsby command. This sets up the basic project structure and dependencies required for a Gatsby application.

```bash
npm init gatsby
```

--------------------------------

### Configure Initial CSS Variables with @theme Directive

Source: https://ui.shadcn.com/docs/tailwind-v4

This CSS snippet demonstrates the initial setup of CSS variables within a `@layer base` block, and their referencing under the `@theme` directive. It shows how `hsl` wrappers are directly applied to the theme variables.

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
  }
}

@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
}
```

--------------------------------

### Configure RTL in components.json

Source: https://ui.shadcn.com/docs/rtl/start

The components.json configuration file generated after project creation includes the rtl flag set to true, along with the style schema and UI framework settings for RTL support.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "rtl": true
}
```

--------------------------------

### Scoped and File-Based Plugin Configuration

Source: https://ui.shadcn.com/docs/registry/examples

Demonstrates how to configure scoped npm packages, Tailwind plugin utilities, and local file-based plugins in a single registry item. Supports npm scoped packages like `@headlessui/tailwindcss`, core Tailwind plugin utilities, and relative file paths for custom plugins.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "scoped-plugins",
  "type": "registry:component",
  "css": {
    "@plugin \"@headlessui/tailwindcss\"": {},
    "@plugin \"tailwindcss/plugin\"": {},
    "@plugin \"./custom-plugin.js\"": {}
  }
}
```

--------------------------------

### Provide Documentation Message for Registry Item in JSON

Source: https://ui.shadcn.com/docs/registry/registry-item-json

This JSON snippet allows for a custom documentation message to be displayed when a registry item is installed via the CLI. It's useful for providing specific instructions or important notes to the user, enhancing the installation experience.

```json
{
  "docs": "To get an OPENAI_API_KEY, sign up for an account at https://platform.openai.com."
}
```

--------------------------------

### Install Shadcn UI Breadcrumb Component via CLI

Source: https://ui.shadcn.com/docs/components/base/breadcrumb

This command-line interface snippet provides the `npx` command to automatically add the Shadcn UI Breadcrumb component to a project. It simplifies the installation process by fetching and configuring the component.

```bash
npx shadcn@latest add breadcrumb
```

--------------------------------

### Install Shadcn UI Label component using CLI

Source: https://ui.shadcn.com/docs/components/base/label

This snippet provides the command-line interface (CLI) method for adding the `Label` component to a Shadcn UI project. It's the recommended and most straightforward way to integrate the component into your development environment.

```bash
npx shadcn@latest add label
```

--------------------------------

### Configure PostCSS for Remix

Source: https://ui.shadcn.com/docs/installation/remix

Create a postcss.config.js file that configures Tailwind CSS and Autoprefixer plugins for processing CSS in your Remix application.

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

--------------------------------

### Add Complex Utility with Pseudo-selectors in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Create advanced utility classes with pseudo-selectors and nested rules to handle complex styling patterns like custom scrollbar hiding across different browsers.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility scrollbar-hidden": {
      "scrollbar-hidden": {
        "&::-webkit-scrollbar": {
          "display": "none"
        }
      }
    }
  }
}
```

--------------------------------

### Item Component Basic Demo - TypeScript React

Source: https://ui.shadcn.com/docs/components/base/item

Demonstrates basic usage of the Item component with two examples: a simple item with title and description, and an item with media, title, and actions. Shows how to compose Item with ItemContent, ItemTitle, ItemDescription, ItemActions, and ItemMedia sub-components.

```typescript
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

export function ItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" render={<a href="#" />}>
        <ItemMedia>
          <BadgeCheckIcon className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Your profile has been verified.</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  )
}
```

--------------------------------

### Control ContextMenu submenu placement with side prop in TypeScript React

Source: https://ui.shadcn.com/docs/components/base/context-menu

This TypeScript React component demonstrates how to use the `side` prop with Shadcn UI's `ContextMenuContent` to control the placement of the submenu relative to its trigger. It showcases examples for positioning the menu to the top, right, bottom, and left, providing a visual guide for each `side` value. The component uses `ContextMenu`, `ContextMenuTrigger`, `ContextMenuContent`, `ContextMenuGroup`, and `ContextMenuItem` from the Shadcn UI library.

```tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuSides() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-4">
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            Right click (top)
          </span>
          <span className="hidden pointer-coarse:inline-block">
            Long press (top)
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent side="top">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            Right click (right)
          </span>
          <span className="hidden pointer-coarse:inline-block">
            Long press (right)
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent side="right">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            Right click (bottom)
          </span>
          <span className="hidden pointer-coarse:inline-block">
            Long press (bottom)
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent side="bottom">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            Right click (left)
          </span>
          <span className="hidden pointer-coarse:inline-block">
            Long press (left)
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent side="left">
          <ContextMenuGroup>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
```

--------------------------------

### Import UI Components from Monorepo Package

Source: https://ui.shadcn.com/docs/monorepo

Import shadcn/ui components from the @workspace/ui package using the configured aliases. Components are accessed through the ui alias pointing to the shared components directory.

```typescript
import { Button } from "@workspace/ui/components/button"
```

--------------------------------

### Initialize shadcn Project from Local JSON File

Source: https://ui.shadcn.com/docs/changelog/2025-07-local-file-support

Initialize a shadcn project using a local template JSON file. This command sets up a new project with configuration and components defined in the local template file, eliminating the need for remote registries.

```bash
npx shadcn init ./template.json
```

--------------------------------

### Components Configuration File - JSON

Source: https://ui.shadcn.com/docs/changelog/2023-06-new-cli

Configuration file for shadcn/ui project setup. This components.json file defines the project style, React Server Components setting, Tailwind CSS configuration paths, base color, and path aliases for components and utilities. Update the tailwind.css and aliases values to match your specific project structure.

```json
{
  "style": "default",
  "rsc": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

--------------------------------

### Add Media Query CSS Imports in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Conditionally import stylesheets using media query syntax to load styles based on device type and screen dimensions, enabling responsive stylesheet management.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "responsive-import",
  "type": "registry:item",
  "css": {
    "@import \"print-styles.css\" print": {},
    "@import url(\"mobile.css\") screen and (max-width: 768px)": {}
  }
}
```

--------------------------------

### Basic Drawer Usage in React

Source: https://ui.shadcn.com/docs/components/base/drawer

Create a simple drawer component with trigger button, header, footer, and action buttons. This example demonstrates the basic structure and composition of a drawer with title, description, and submit/cancel actions.

```tsx
<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

--------------------------------

### Basic Skeleton Usage

Source: https://ui.shadcn.com/docs/components/base/skeleton

Minimal example showing a single Skeleton component with custom Tailwind CSS classes for height, width, and border radius. Demonstrates the simplest way to create a loading placeholder.

```typescript
<Skeleton className="h-[20px] w-[100px] rounded-full" />
```

--------------------------------

### Implement a basic Shadcn UI Alert Dialog example component in TypeScript/React

Source: https://ui.shadcn.com/docs/components/radix/alert-dialog

This example demonstrates a complete, functional basic alert dialog component. It includes the necessary imports for `AlertDialog` and `Button`, and defines the JSX structure for a dialog with a trigger, title, description, and interactive cancel/continue buttons. This component is ready to be used in a React application.

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogBasic() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

--------------------------------

### Implement Basic Context Menu in React

Source: https://ui.shadcn.com/docs/components/base/context-menu

This example demonstrates a minimal implementation of a context menu, showing how to wrap content with ContextMenuTrigger and define simple menu items within ContextMenuContent. It provides a fundamental structure for adding right-click functionality to any element.

```tsx
<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

--------------------------------

### Install shadcn/ui Calendar Component

Source: https://ui.shadcn.com/docs/components/calendar

This command uses `pnpm dlx` to add the Calendar component from the shadcn/ui library to your project. It automates the process of fetching and configuring the component files, including dependencies.

```bash
pnpm dlx shadcn@latest add calendar
```

--------------------------------

### Create shadcn/ui Project with npx Command

Source: https://ui.shadcn.com/docs/changelog/2025-12-shadcn-create

Initialize a new shadcn/ui project with customization options using the npx shadcn create command. This CLI tool allows you to select component libraries, visual styles, icons, base colors, themes, and fonts. The command automatically detects your project setup and applies appropriate transformations.

```bash
npx shadcn create
```

--------------------------------

### Overriding Tailwind Theme Variables

Source: https://ui.shadcn.com/docs/registry/faq

JSON configuration demonstrating how to add or override Tailwind theme variables including text size, easing functions, and font families.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    // ...
  ],
  "cssVars": {
    "theme": {
      "text-base": "3rem",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      "font-heading": "Poppins, sans-serif"
    }
  }
}
```

--------------------------------

### Form with Multiple Fields and Buttons

Source: https://ui.shadcn.com/docs/components/base/field

Complete form example demonstrating FieldSet, FieldGroup, Field components with various input types including text inputs, textarea, and submit/cancel buttons with proper form structure.

```typescript
<form>
  <FieldGroup>
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-optional-comments">
            Comments
          </FieldLabel>
          <Textarea
            id="checkout-7j9-optional-comments"
            placeholder="Add any additional comments"
            className="resize-none"
          />
        </Field>
      </FieldGroup>
    </FieldSet>
    <Field orientation="horizontal">
      <Button type="submit">Submit</Button>
      <Button variant="outline" type="button">
        Cancel
      </Button>
    </Field>
  </FieldGroup>
</form>
```

--------------------------------

### Install Scroll Area Component via CLI

Source: https://ui.shadcn.com/docs/components/base/scroll-area

Command-line installation method for adding the scroll-area component to a shadcn/ui project. Uses the shadcn CLI tool to automatically download and configure the component with all dependencies.

```bash
npx shadcn@latest add scroll-area
```

--------------------------------

### Define Registry URL with Style Placeholder (JSON)

Source: https://ui.shadcn.com/docs/registry/namespace

This example demonstrates the optional `{style}` placeholder in a registry URL. This placeholder is replaced with the currently configured style, enabling the registry to serve different versions of resources based on the user's styling preferences. It's useful for providing style-specific component variations.

```json
{
  "@themes": "https://registry.example.com/{style}/{name}.json"
}
```

--------------------------------

### Implement Basic Shadcn UI Toggle Component in React

Source: https://ui.shadcn.com/docs/components/radix/toggle

Demonstrates a basic implementation of the Shadcn UI Toggle component using React and Lucide icons. This example shows how to render a toggle button with a bookmark icon and text, applying a specific size and variant for styling.

```tsx
import { Toggle } from "@/components/ui/toggle"
import { BookmarkIcon } from "lucide-react"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  )
}
```

--------------------------------

### Common Partial Imports for Breadcrumb Examples (Link & Breadcrumb)

Source: https://ui.shadcn.com/docs/components/breadcrumb

A partial import statement commonly used across various shadcn/ui Breadcrumb examples, such as custom separator, dropdown, collapsed, and custom link component examples. It imports `Link` from `next/link` for routing and the base `Breadcrumb` component from the UI library.

```typescript
import Link from "next/link"
import {
  Breadcrumb,

```

--------------------------------

### Example Implementation of RTL Support for Shadcn/ui Pagination in TSX

Source: https://ui.shadcn.com/docs/components/base/pagination

This TypeScript React example demonstrates a full implementation of Right-to-Left (RTL) support for the Shadcn/ui Pagination component. It includes a `useTranslation` hook for managing language direction and localized text (English, Arabic, Hebrew), a utility function `toArabicNumerals` for number formatting, and renders a pagination component that dynamically adapts to the selected language's direction and numeral system.

```tsx
"use client"

import * as React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/examples/base/ui-rtl/pagination"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      previous: "Previous",
      next: "Next",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      previous: "السابق",
      next: "التالي",
    },
  },
  he: {
    dir: "rtl",
    values: {
      previous: "הקודם",
      next: "הבא",
    },
  },
}

function toArabicNumerals(num: number): string {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
  return num
    .toString()
    .split("")
    .map((digit) => arabicNumerals[parseInt(digit, 10)])
    .join("")
}

export function PaginationRtl() {
  const { dir, t, language } = useTranslation(translations, "ar")

  const formatNumber = (num: number): string => {
    if (language === "ar") {
      return toArabicNumerals(num)
    }
    return num.toString()
  }

  return (
    <Pagination dir={dir}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" text={t.previous} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{formatNumber(1)}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {formatNumber(2)}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{formatNumber(3)}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" text={t.next} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

--------------------------------

### Example of Shadcn UI Pagination with RTL and Internationalization

Source: https://ui.shadcn.com/docs/components/radix/pagination

This comprehensive example showcases how to implement Right-to-Left (RTL) support for the Shadcn UI Pagination component, including internationalization for 'Previous' and 'Next' labels and number formatting. It uses a custom `useTranslation` hook to manage language direction and localized text, and a `toArabicNumerals` function for number conversion. The component dynamically renders based on the selected language.

```tsx
"use client"

import * as React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/examples/radix/ui-rtl/pagination"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      previous: "Previous",
      next: "Next",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      previous: "السابق",
      next: "التالي",
    },
  },
  he: {
    dir: "rtl",
    values: {
      previous: "הקודם",
      next: "הבא",
    },
  },
}

function toArabicNumerals(num: number): string {
  const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
  return num
    .toString()
    .split("")
    .map((digit) => arabicNumerals[parseInt(digit, 10)])
    .join("")
}

export function PaginationRtl() {
  const { dir, t, language } = useTranslation(translations, "ar")

  const formatNumber = (num: number): string => {
    if (language === "ar") {
      return toArabicNumerals(num)
    }
    return num.toString()
  }

  return (
    <Pagination dir={dir}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" text={t.previous} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{formatNumber(1)}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {formatNumber(2)}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{formatNumber(3)}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" text={t.next} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

--------------------------------

### Radix UI Migration Import Transformation Example (TSX)

Source: https://ui.shadcn.com/docs/cli

Illustrates the import transformation performed by the `radix` migration. It shows how individual `@radix-ui/react-*` imports are consolidated into a single import from the `radix-ui` package, simplifying dependencies and improving consistency.

```tsx
import * as DialogPrimitive from "@radix-ui/react-dialog"
import * as SelectPrimitive from "@radix-ui/react-select"
```

```tsx
import { Dialog as DialogPrimitive, Select as SelectPrimitive } from "radix-ui"
```

--------------------------------

### Import and Use Button Component in Astro Page

Source: https://ui.shadcn.com/docs/installation/astro

Demonstrates importing the Button component from '@/components/ui/button' in an Astro page and rendering it within the page layout. Shows the integration of shadcn/ui components in Astro's component syntax.

```astro
---
import { Button } from "@/components/ui/button"
---

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>Astro + TailwindCSS</title>
	</head>

	<body>
		<div className="grid place-items-center h-screen content-center">
			<Button>Button</Button>
		</div>
	</body>
</html>
```

--------------------------------

### Import Hooks and Utilities from Monorepo

Source: https://ui.shadcn.com/docs/monorepo

Import custom hooks and utility functions from the @workspace/ui package using configured aliases. Provides access to theme hooks and utility functions like cn for className composition.

```typescript
import { useTheme } from "@workspace/ui/hooks/use-theme"
import { cn } from "@workspace/ui/lib/utils"
```

--------------------------------

### InputGroup Examples with Loading Spinners (Shadcn UI)

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This snippet presents several `InputGroup` configurations that incorporate loading indicators or spinners, useful for showing ongoing processes like searching, processing, or saving. It demonstrates how to integrate `Spinner` or `LoaderIcon` components within `InputGroupAddon` elements, often alongside disabled input fields to provide visual feedback during asynchronous operations. Dependencies include `lucide-react` for icons and a custom `Spinner` component.

```tsx
import { LoaderIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"

export function InputGroupSpinner() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Searching..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Processing..." disabled />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Saving changes..." disabled />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Saving...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Refreshing data..." disabled />
        <InputGroupAddon>
          <LoaderIcon className="animate-spin" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-muted-foreground">
            Please wait...
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Import and Use Button Component in Remix Route

Source: https://ui.shadcn.com/docs/installation/remix

Import the Button component from the ui folder and use it in a Remix route component. Demonstrates basic component usage in a Remix application.

```typescript
import { Button } from "~/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

--------------------------------

### Basic Alert with Icon, Title, and Description

Source: https://ui.shadcn.com/docs/components/base/alert

Create a basic alert component with an icon, title, and description text. This example demonstrates the fundamental structure of an Alert with a success icon using lucide-react icons.

```tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon } from "lucide-react"

export function AlertBasic() {
  return (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected
        immediately.
      </AlertDescription>
    </Alert>
  )
}
```

--------------------------------

### List Available Component Updates with shadcn/ui CLI

Source: https://ui.shadcn.com/docs/changelog/2023-06-new-cli

This experimental command helps users track upstream changes by listing components that have updates available. It provides an overview of which installed components might need to be refreshed to incorporate the latest features or bug fixes.

```bash
npx shadcn diff
```

--------------------------------

### Add Components to Project with shadcn/ui CLI

Source: https://ui.shadcn.com/docs/changelog/2023-06-new-cli

This command allows users to add new UI components to their project. The CLI automatically handles dependency resolution, formatting based on custom configurations, and integration into the project's structure.

```bash
npx shadcn@latest add
```

--------------------------------

### CLI Error for Missing Environment Variables

Source: https://ui.shadcn.com/docs/changelog/2025-08-cli-3-mcp

This example shows the CLI's helpful error message when a registry requires specific environment variables, instructing users to set them in their `.env` or `.env.local` files.

```txt
Registry "@private" requires the following environment variables:
  • REGISTRY_TOKEN

Set the required environment variables to your .env or .env.local file.
```

--------------------------------

### Configure components.json for Web App Workspace

Source: https://ui.shadcn.com/docs/monorepo

Configure the components.json file for the web app workspace with shadcn/ui schema, style settings, Tailwind CSS configuration, and path aliases for component imports. Maps local paths and external @workspace/ui package paths for seamless component resolution.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "../../packages/ui/src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "hooks": "@/hooks",
    "lib": "@/lib",
    "utils": "@workspace/ui/lib/utils",
    "ui": "@workspace/ui/components"
  }
}
```

--------------------------------

### Setup TooltipProvider in Root Layout

Source: https://ui.shadcn.com/docs/components/base/tooltip

Wraps the application root with TooltipProvider to enable tooltip functionality throughout the app. This provider must be placed at the top level of your application layout to ensure all tooltips work correctly.

```tsx
import { TooltipProvider } from "@/components/ui/tooltip"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
```

--------------------------------

### Add Functional Utilities with Variants in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Define functional utility classes with wildcard variants that accept dynamic values, enabling flexible utilities like tab-size that adapt to theme variables.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility tab-*": {
      "tab-size": "var(--tab-size-*)"
    }
  }
}
```

--------------------------------

### Force Install `npm` Packages to Resolve Peer Dependency Conflicts

Source: https://ui.shadcn.com/docs/react-19

These `npm` commands provide two methods to bypass strict peer dependency checks when installing packages. `--force` ignores and overrides any dependency conflicts, while `--legacy-peer-deps` skips strict peer dependency checks, allowing installation of packages with unmet dependencies. Use these when packages haven't updated their peer dependency declarations for React 19.

```bash
npm i <package> --force

npm i <package> --legacy-peer-deps
```

--------------------------------

### Install TanStack React Table Dependency

Source: https://ui.shadcn.com/docs/components/base/data-table

NPM command to install the TanStack React Table library, which provides the core table logic and hooks for managing table state, sorting, filtering, and pagination.

```bash
npm install @tanstack/react-table
```

--------------------------------

### Configure Global Styles and Theming with CSS Variables in CSS

Source: https://ui.shadcn.com/docs/installation/manual

This CSS snippet configures global styles for a Shadcn UI application. It imports necessary frameworks like Tailwind CSS, defines custom CSS variables for a comprehensive theming system (supporting light and dark modes), and establishes base styles for elements like borders, backgrounds, and text colors.

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

--------------------------------

### GET /chat/api/open

Source: https://ui.shadcn.com/docs/registry/open-in-v0

Integrate your registry with Open in v0. This endpoint allows you to open a publicly accessible registry item in v0 by providing its URL.

```APIDOC
## GET /chat/api/open

### Description
This endpoint allows you to open a publicly accessible registry item in v0 by providing its URL. It redirects to or initiates an action within the v0 application.

### Method
GET

### Endpoint
/chat/api/open

### Parameters
#### Path Parameters
(None)

#### Query Parameters
- **url** (string) - Required - The publicly accessible URL of the registry item to open in v0.

#### Request Body
(None)

### Request Example
(N/A for GET request with query parameters)

### Response
#### Success Response (302 Redirect)
This endpoint typically performs a redirect or initiates an action within the v0 application, rather than returning a direct JSON response.

#### Response Example
(N/A)
```

--------------------------------

### Example Usage of Calendar Component with Locale Prop

Source: https://ui.shadcn.com/docs/components/base/calendar

This example demonstrates how to use the updated `Calendar` component by importing a specific locale, such as `enUS` from `react-day-picker/locale`, and passing it to the `locale` prop. This enables locale-specific date formatting and behavior for the calendar.

```tsx
import { enUS } from "react-day-picker/locale"

;<Calendar mode="single" selected={date} onSelect={setDate} locale={enUS} />
```

--------------------------------

### Create a file Input component (TypeScript/TSX)

Source: https://ui.shadcn.com/docs/components/base/input

Demonstrates how to create a file upload input using `type="file"` within the `Input` component, integrated with `Field` and `FieldLabel`. This example shows how to handle file selection in a structured form.

```tsx
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputFile() {
  return (
    <Field>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </Field>
  )
}
```

--------------------------------

### Full Bar Chart Example with Legend (TSX)

Source: https://ui.shadcn.com/docs/components/radix/chart

Provides a complete example of a BarChart component including data, configuration, and the integration of `ChartLegend` and `ChartTooltip` for a fully functional chart with a legend. This component is ready for use in a Next.js client-side environment.

```tsx
"use client"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 }
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb"
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa"
  }
} satisfies ChartConfig

export function ChartBarDemoLegend() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

--------------------------------

### Create Vite Project with RTL Support using shadcn/ui CLI

Source: https://ui.shadcn.com/docs/rtl/vite

This command initializes a new Vite project with Right-to-Left (RTL) support enabled by default, using the shadcn/ui CLI. It sets up the project structure and configures `components.json` for RTL.

```bash
npx shadcn@latest create --template vite --rtl
```

--------------------------------

### Add URL-based CSS Imports in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Import external stylesheets and web fonts using url() syntax for CDN resources and local files, enabling integration of Google Fonts and remote style libraries.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "font-import",
  "type": "registry:item",
  "css": {
    "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\")": {},
    "@import url('./local-styles.css')": {}
  }
}
```

--------------------------------

### Calendar Usage Example - React TSX

Source: https://ui.shadcn.com/docs/components/radix/calendar

Complete usage example showing state management and Calendar component configuration with single date selection mode. Demonstrates binding selected date state and handling selection changes through the onSelect callback.

```tsx
const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
)
```

--------------------------------

### Menubar Checkbox Items Example in TSX

Source: https://ui.shadcn.com/docs/components/base/menubar

This example demonstrates how to use `MenubarCheckboxItem` within a Menubar for toggleable options. It shows two menus, 'View' and 'Format', each containing checkbox items to control different settings, some with default checked states.

```tsx
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarCheckbox() {
  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent className="w-64">
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Format</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Strikethrough</MenubarCheckboxItem>
          <MenubarCheckboxItem>Code</MenubarCheckboxItem>
          <MenubarCheckboxItem>Superscript</MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

--------------------------------

### Add Environment Variables to shadcn UI Registry Item

Source: https://ui.shadcn.com/docs/registry/examples

Shows how to declare environment variables using the `envVars` field in a registry item. Variables are added to `.env.local` or `.env` files without overwriting existing values. Best practice is to use this for development and example variables only, never production secrets.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-item",
  "type": "registry:item",
  "envVars": {
    "NEXT_PUBLIC_APP_URL": "http://localhost:4000",
    "DATABASE_URL": "postgresql://postgres:postgres@localhost:5432/postgres",
    "OPENAI_API_KEY": ""
  }
}
```

--------------------------------

### Configure import alias for UI components

Source: https://ui.shadcn.com/docs/components-json

Sets the import path alias specifically for UI components, allowing customization of the installation directory. Overrides the default location if needed.

```json
{
  "aliases": {
    "ui": "@/app/ui"
  }
}
```

--------------------------------

### Basic Slider Usage

Source: https://ui.shadcn.com/docs/components/base/slider

Minimal example showing how to render a Slider with default value of 33, maximum value of 100, and step increment of 1.

```tsx
<Slider defaultValue={[33]} max={100} step={1} />
```

--------------------------------

### Configure components.json for UI Package Workspace

Source: https://ui.shadcn.com/docs/monorepo

Configure the components.json file for the shared ui package workspace with shadcn/ui schema and @workspace/ui aliases. Defines how components, utilities, hooks, and libraries are resolved within the ui package.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@workspace/ui/components",
    "utils": "@workspace/ui/lib/utils",
    "hooks": "@workspace/ui/hooks",
    "lib": "@workspace/ui/lib",
    "ui": "@workspace/ui/components"
  }
}
```

--------------------------------

### Badge Component Basic Demo

Source: https://ui.shadcn.com/docs/components/base/badge

Demonstrates the basic Badge component with multiple built-in variants. Imports the Badge component and renders examples of default, secondary, destructive, and outline variants in a flex container.

```tsx
import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}
```

--------------------------------

### Basic Shadcn Sheet usage example in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/sheet

This snippet demonstrates the minimal structure for implementing a Shadcn Sheet component. It shows how to define a SheetTrigger to open the sheet and structure the SheetContent with a SheetHeader, SheetTitle, and SheetDescription to display basic information. This serves as a foundational example for integrating the Sheet into a React application.

```tsx
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>This action cannot be undone.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

--------------------------------

### Install Shadcn Sheet component via CLI

Source: https://ui.shadcn.com/docs/components/base/sheet

This snippet provides the command-line interface (CLI) instruction to quickly add the Shadcn Sheet component to your project. Executing this command automatically sets up the necessary files and configurations, streamlining the integration process for Shadcn UI components.

```bash
npx shadcn@latest add sheet
```

--------------------------------

### Initialize shadcn MCP Server for AI Clients

Source: https://ui.shadcn.com/docs/registry/mcp

These snippets provide instructions for initializing the shadcn MCP server to integrate with various AI development clients. The setup typically involves running a command-line utility for most clients, while Codex requires a specific TOML configuration to define the MCP server's command and arguments. Each method ensures the MCP server is properly launched and recognized by the respective AI client.

```bash
npx shadcn@latest mcp init --client claude
```

```bash
npx shadcn@latest mcp init --client cursor
```

```bash
npx shadcn@latest mcp init --client vscode
```

```toml
[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]
```

```bash
npx shadcn@latest mcp init --client opencode
```

--------------------------------

### Basic Registry Configuration with URL Templates

Source: https://ui.shadcn.com/docs/components-json

Configure multiple registries with simple URL template syntax. The {name} placeholder is automatically replaced with the resource name during installation. Supports multiple registry namespaces (@v0, @acme, @internal) for organizing component sources.

```json
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@acme": "https://registry.acme.com/{name}.json",
    "@internal": "https://internal.company.com/{name}.json"
  }
}
```

--------------------------------

### Badge Component Variants Example

Source: https://ui.shadcn.com/docs/components/base/badge

Demonstrates all available Badge variants including default, secondary, destructive, outline, and ghost. Renders multiple badges in a flex container to showcase styling differences.

```tsx
import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  )
}
```

--------------------------------

### Create a Basic Form Structure with TanStack Form and React/TSX

Source: https://ui.shadcn.com/docs/forms/tanstack-form

This example illustrates the basic structure of a form using TanStack Form's `form.Field` component. It shows how to handle form submission, define a field with a render prop pattern, and display validation feedback using `isInvalid` state.

```tsx
<form
  onSubmit={(e) => {
    e.preventDefault()
    form.handleSubmit()
  }}
>
  <FieldGroup>
    <form.Field
      name="title"
      children={(field) => {
        const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid
        return (
          <Field data-invalid={isInvalid}>
            <FieldLabel htmlFor={field.name}>Bug Title</FieldLabel>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              aria-invalid={isInvalid}
              placeholder="Login button not working on mobile"
              autoComplete="off"
            />
            <FieldDescription>
              Provide a concise title for your bug report.
            </FieldDescription>
            {isInvalid && <FieldError errors={field.state.meta.errors} />}
          </Field>
        )
      }}
    />
  </FieldGroup>
  <Button type="submit">Submit</Button>
</form>
```

--------------------------------

### Menubar Radio Group and Items Example in TSX

Source: https://ui.shadcn.com/docs/components/base/menubar

This example illustrates the use of `MenubarRadioGroup` and `MenubarRadioItem` for single-selection options within a Menubar. It includes state management using React's `useState` to handle selected profiles and themes, demonstrating dynamic updates based on user interaction.

```tsx
"use client"

import * as React from "react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarRadio() {
  const [user, setUser] = React.useState("benoit")
  const [theme, setTheme] = React.useState("system")

  return (
    <Menubar className="w-72">
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={user} onValueChange={setUser}>
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Theme</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

--------------------------------

### Basic Navigation Menu Structure

Source: https://ui.shadcn.com/docs/components/base/navigation-menu

Fundamental example demonstrating the basic structure of a Navigation Menu with a trigger item and content link. Shows the hierarchical component composition required for a functional navigation menu.

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

--------------------------------

### Import and use shadcn/ui Button in a React Router component

Source: https://ui.shadcn.com/docs/installation/react-router

This example demonstrates how to import the newly added shadcn/ui Button component into a React Router route file (e.g., `app/routes/home.tsx`) and render it. It also includes an example of defining route metadata.

```tsx
import { Button } from "~/components/ui/button"

import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" }
  ]
}

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}
```

--------------------------------

### Collapsible Demo with Order Details

Source: https://ui.shadcn.com/docs/components/base/collapsible

Complete example demonstrating a Collapsible component displaying order information with a custom trigger button and multiple content sections. Includes styling with Tailwind CSS and Lucide React icons.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-[350px] flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">Order #4189</h4>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon" className="size-8" />}
        >
          <ChevronsUpDown />
          <span className="sr-only">Toggle details</span>
        </CollapsibleTrigger>
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">Status</span>
        <span className="font-medium">Shipped</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Shipping address</p>
          <p className="text-muted-foreground">100 Market St, San Francisco</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Items</p>
          <p className="text-muted-foreground">2x Studio Headphones</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
```

--------------------------------

### Initialize shadcn MCP Server for AI Clients

Source: https://ui.shadcn.com/docs/mcp

These commands initialize the shadcn MCP server for various AI development environments. Running the appropriate command configures the client to interact with shadcn component registries, enabling AI assistants to browse, search, and install components from them.

```bash
npx shadcn@latest mcp init --client claude
```

```bash
npx shadcn@latest mcp init --client cursor
```

```bash
npx shadcn@latest mcp init --client vscode
```

```bash
npx shadcn@latest mcp init --client codex
```

```bash
npx shadcn@latest mcp init --client opencode
```

--------------------------------

### CLI Error for Unknown Registry Definition

Source: https://ui.shadcn.com/docs/changelog/2025-08-cli-3-mcp

This snippet demonstrates how the CLI provides a clear, actionable error message when a registry is not defined in `components.json`, guiding users on the correct configuration format.

```txt
Unknown registry "@acme". Make sure it is defined in components.json as follows:
{
  "registries": {
    "@acme": "[URL_TO_REGISTRY]"
  }
}
```

--------------------------------

### Comprehensive form example with various Field controls in TSX

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This comprehensive example showcases the `Field` component's capability to integrate various form controls like `Input` and `Select` within a complex structure. It illustrates a payment method form, including card details and expiration date selection, organized using `FieldSet` and `FieldGroup`. This snippet highlights the flexibility and power of the `Field` abstraction for building detailed and interactive forms.

```tsx
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function FieldDemo() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Month
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="04">04</SelectItem>
                      <SelectItem value="05">05</SelectItem>
                      <SelectItem value="06">06</SelectItem>
                      <SelectItem value="07">07</SelectItem>
                      <SelectItem value="08">08</SelectItem>
                      <SelectItem value="09">09</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Year
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
```

--------------------------------

### Install shadcn Table Component

Source: https://ui.shadcn.com/docs/components/base/data-table

Command to add the Table component from shadcn UI to your project. This provides the base UI components needed for table rendering.

```bash
npx shadcn@latest add table
```

--------------------------------

### Input Group with Inline-Start Alignment

Source: https://ui.shadcn.com/docs/components/input-group

Position the addon at the start of the input using the align="inline-start" prop. This is the default alignment and positions the addon before the input field visually.

```typescript
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

<InputGroup>
  <InputGroupAddon align="inline-start">
    <Icon />
  </InputGroupAddon>
  <InputGroupInput placeholder="Input" />
</InputGroup>
```

--------------------------------

### Basic Sheet Component Usage

Source: https://ui.shadcn.com/docs/components/radix/sheet

Create a basic Sheet with a trigger button, header with title and description, and footer with action buttons. This example demonstrates the minimal structure needed to display a functional sheet dialog.

```tsx
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>This action cannot be undone.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

--------------------------------

### Example Usage of `dir` Prop with Shadcn UI Sidebar (React/TSX)

Source: https://ui.shadcn.com/docs/components/base/sidebar

This final snippet demonstrates how to use the `dir` prop on the `Sidebar` component to explicitly set the text direction. For example, `<Sidebar dir="rtl" side="right">` will configure the sidebar for a Right-to-Left layout, leveraging the changes implemented in the previous steps.

```tsx
<Sidebar dir="rtl" side="right">
  {/* ... */}
</Sidebar>
```

--------------------------------

### Run radix-ui Migration Command

Source: https://ui.shadcn.com/docs/changelog/2025-06-radix-ui

Execute the migration command to automatically replace all @radix-ui/react-* imports with the new radix-ui package. This command updates all imports in your ui components directory and installs radix-ui as a dependency.

```bash
npx shadcn@latest migrate radix
```

--------------------------------

### Render Toggle Components with Different Sizes (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/base/toggle

Shows examples of the `Toggle` component rendered in `sm`, `default`, and `lg` sizes using the `size` prop. This demonstrates how to adjust the visual scale of the toggle button.

```tsx
import { Toggle } from "@/components/ui/toggle"

export function ToggleSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="Toggle small" size="sm">
        Small
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle default" size="default">
        Default
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle large" size="lg">
        Large
      </Toggle>
    </div>
  )
}
```

--------------------------------

### Create a Basic Shadcn UI Breadcrumb Component Example in TSX

Source: https://ui.shadcn.com/docs/components/base/breadcrumb

This example provides a functional React component, `BreadcrumbBasic`, that renders a simple breadcrumb navigation. It illustrates the fundamental structure using `BreadcrumbLink` for clickable items and `BreadcrumbPage` for the current page, separated by `BreadcrumbSeparator`.

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbBasic() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

--------------------------------

### Partial Import for Basic Breadcrumb Example (Breadcrumb & Item)

Source: https://ui.shadcn.com/docs/components/breadcrumb

A partial import statement specifically for the basic shadcn/ui Breadcrumb example, bringing in `Breadcrumb` and `BreadcrumbItem` from the UI library. This snippet is typically part of a larger React component file where these specific components are needed.

```typescript
import {
  Breadcrumb,
  BreadcrumbItem,

```

--------------------------------

### Render a basic AspectRatio component with Image in TSX

Source: https://ui.shadcn.com/docs/components/base/aspect-ratio

This example demonstrates the fundamental usage of the `AspectRatio` component to wrap an `Image` from Next.js, maintaining a 16:9 ratio. It showcases how to import the necessary components and apply basic styling for a responsive display.

```tsx
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted w-full max-w-sm rounded-lg">
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}
```

--------------------------------

### Navigation Menu with Next.js Link Component

Source: https://ui.shadcn.com/docs/components/base/navigation-menu

Advanced example showing how to integrate Next.js Link component with Navigation Menu using the render prop. Demonstrates custom link composition with navigationMenuTriggerStyle for consistent styling.

```tsx
import Link from "next/link"

import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        render={<Link href="/docs" />}
        className={navigationMenuTriggerStyle()}
      >
        Documentation
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}
```

--------------------------------

### Basic Menubar Component Usage in TSX

Source: https://ui.shadcn.com/docs/components/base/menubar

This code provides a basic example of how to render a Menubar component with a simple 'File' menu. It includes `MenubarTrigger`, `MenubarContent`, `MenubarGroup`, `MenubarItem`, and `MenubarSeparator` to create a functional menu structure with nested items.

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarGroup>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>New Window</MenubarItem>
      </MenubarGroup>
      <MenubarSeparator />
      <MenubarGroup>
        <MenubarItem>Share</MenubarItem>
        <MenubarItem>Print</MenubarItem>
      </MenubarGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

--------------------------------

### Implement Basic Context Menu in React (shadcn/ui)

Source: https://ui.shadcn.com/docs/components/base/context-menu

This example demonstrates how to create a simple context menu using shadcn/ui's ContextMenu component. It includes basic actions like 'Back', 'Forward', and 'Reload', with 'Forward' being disabled. The trigger area responds to right-clicks or long presses, providing a standard context menu experience.

```tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuBasic() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click here
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press here
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem disabled>Forward</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

--------------------------------

### Configure `DirectionProvider` for application-wide RTL

Source: https://ui.shadcn.com/docs/components/base/direction

This example illustrates how to wrap your entire React application with the `DirectionProvider` component, setting the `dir` attribute on the `html` tag and passing the `direction` prop. This ensures consistent right-to-left rendering across all components.

```tsx
<html dir="rtl">
  <body>
    <DirectionProvider direction="rtl">
      {/* Your app content */}
    </DirectionProvider>
  </body>
</html>
```

--------------------------------

### Define Custom Animations with Keyframes and CSS Variables

Source: https://ui.shadcn.com/docs/registry/examples

Demonstrates how to create custom animations by defining both `@keyframes` in the css object and corresponding theme variables in `cssVars`. This pattern requires matching keyframe definitions and theme configuration to properly use animations in Tailwind classes.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "cssVars": {
    "theme": {
      "--animate-wiggle": "wiggle 1s ease-in-out infinite"
    }
  },
  "css": {
    "@keyframes wiggle": {
      "0%, 100%": {
        "transform": "rotate(-3deg)"
      },
      "50%": {
        "transform": "rotate(3deg)"
      }
    }
  }
}
```

--------------------------------

### Complex Component Registry Configuration

Source: https://ui.shadcn.com/docs/registry/faq

A complete JSON schema defining a complex shadcn/ui registry item that includes a page, multiple components, a hook, utilities, and a config file with specified targets.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    {
      "path": "registry/new-york/hello-world/page.tsx",
      "type": "registry:page",
      "target": "app/hello/page.tsx"
    },
    {
      "path": "registry/new-york/hello-world/components/hello-world.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/components/formatted-message.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/hooks/use-hello.ts",
      "type": "registry:hook"
    },
    {
      "path": "registry/new-york/hello-world/lib/format-date.ts",
      "type": "registry:utils"
    },
    {
      "path": "registry/new-york/hello-world/hello.config.ts",
      "type": "registry:file",
      "target": "~/hello.config.ts"
    }
  ]
}
```

--------------------------------

### Configure Tailwind and PostCSS in remix.config.js

Source: https://ui.shadcn.com/docs/installation/remix

Update the remix.config.js file to enable Tailwind CSS and PostCSS processing. This allows Remix to handle CSS compilation during development and build.

```javascript
/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...
  tailwind: true,
  postcss: true,
  ...
};
```

--------------------------------

### Configure Tailwind CSS import path

Source: https://ui.shadcn.com/docs/components-json

Defines the path to the CSS file that imports Tailwind CSS into the project. This helps the CLI locate and understand the Tailwind setup.

```json
{
  "tailwind": {
    "css": "styles/global.css"
  }
}
```

--------------------------------

### Query Parameter Authentication Configuration

Source: https://ui.shadcn.com/docs/registry/authentication

Configure query parameter-based authentication for simpler registry setups. Appends authentication token as query parameter to the registry URL, resulting in URLs like https://registry.company.com/button.json?token=your_token.

```json
{
  "registries": {
    "@internal": {
      "url": "https://registry.company.com/{name}.json",
      "params": {
        "token": "${ACCESS_TOKEN}"
      }
    }
  }
}
```

--------------------------------

### Basic usage of the Label component with htmlFor

Source: https://ui.shadcn.com/docs/components/base/label

This example demonstrates the fundamental way to render a `Label` component, associating it with an input element (implicitly `htmlFor='email'`). The `htmlFor` prop is crucial for linking the label to its corresponding form control, enhancing accessibility for users.

```tsx
<Label htmlFor="email">Your email address</Label>
```

--------------------------------

### Input Group with inline-start Alignment - React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/input-group

Creates an input group with an addon positioned at the start of the input using the align="inline-start" prop. Includes field label and description for context.

```typescript
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"

export function InputGroupInlineStart() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the start.</FieldDescription>
    </Field>
  )
}
```

--------------------------------

### Configure custom shadcn registry in components.json

Source: https://ui.shadcn.com/docs/registry/namespace

Provides an example of how to configure a custom registry in the `components.json` file. This allows the shadcn CLI to resolve components from a specified URL pattern using a custom namespace.

```json
{
  "registries": {
    "@your-registry": "https://your-domain.com/r/{name}.json"
  }
}
```

--------------------------------

### Render DataTable in Page Component

Source: https://ui.shadcn.com/docs/components/data-table

Demonstrates how to use the DataTable component in a page component with async data fetching. Includes sample Payment data structure and proper TypeScript typing for the data source.

```typescript
import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
```

--------------------------------

### Create Popover with Form Fields

Source: https://ui.shadcn.com/docs/components/base/popover

Shows how to build a Popover component containing form fields for user input. The example includes a header with title and description, followed by a field group with horizontal-oriented input fields for width and height dimensions.

```tsx
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverForm() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          Open Popover
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>
              Set the dimensions for the layer.
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="width" className="w-1/2">
                Width
              </FieldLabel>
              <Input id="width" defaultValue="100%" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="height" className="w-1/2">
                Height
              </FieldLabel>
              <Input id="height" defaultValue="25px" />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </>
  )
}
```

--------------------------------

### Basic Item Component Usage with Icon (TSX)

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This example illustrates the fundamental structure of an `Item` component, showcasing how to embed an icon using `ItemMedia`, define a title with `ItemTitle`, and provide a description using `ItemDescription`. It represents a common pattern for displaying list items or simple cards with a visual cue.

```tsx
<Item>
  <ItemMedia variant="icon">
    <HomeIcon />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Dashboard</ItemTitle>
    <ItemDescription>Overview of your account and activity.</ItemDescription>
  </ItemContent>
</Item>
```

--------------------------------

### Basic Skeleton Component Demo

Source: https://ui.shadcn.com/docs/components/base/skeleton

Demonstrates a simple skeleton loader with a circular avatar placeholder and two rectangular text placeholders. This is the primary example showing the basic usage pattern of the Skeleton component with Tailwind CSS classes for sizing and spacing.

```typescript
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
```

--------------------------------

### Drawer Component Demo with Goal Tracker

Source: https://ui.shadcn.com/docs/components/radix/drawer

A complete interactive drawer example demonstrating state management with React hooks, chart visualization using Recharts, and goal adjustment controls. The component displays a daily activity goal with increment/decrement buttons, a bar chart visualization, and form submission controls.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
]

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-muted-foreground text-[0.70rem] uppercase">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "var(--chart-1)",
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
```

--------------------------------

### Render Toggle Components with Outline Variant (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/base/toggle

Demonstrates how to apply an `outline` variant to `Toggle` components using the `variant='outline'` prop. Includes examples with `BoldIcon` and `ItalicIcon` within a flex container for layout.

```tsx
import { Toggle } from "@/components/ui/toggle"
import { BoldIcon, ItalicIcon } from "lucide-react"

export function ToggleOutline() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <BoldIcon />
        Bold
      </Toggle>
    </div>
  )
}
```

--------------------------------

### Create custom style from scratch without shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Define a standalone registry style that does not extend shadcn/ui (using `extends: none`) by specifying npm dependencies, registry dependencies for components, and custom CSS variables for theme colors. This enables creating entirely custom component systems independent of shadcn/ui defaults.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "extends": "none",
  "name": "new-style",
  "type": "registry:style",
  "dependencies": ["tailwind-merge", "clsx"],
  "registryDependencies": [
    "utils",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json",
    "https://example.com/r/select.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "main": "#88aaee",
      "bg": "#dfe5f2",
      "border": "#000",
      "text": "#000",
      "ring": "#000"
    },
    "dark": {
      "main": "#88aaee",
      "bg": "#272933",
      "border": "#000",
      "text": "#e6e6e6",
      "ring": "#fff"
    }
  }
}
```

--------------------------------

### Listen to Carousel Select Events

Source: https://ui.shadcn.com/docs/components/base/carousel

Shows how to attach event listeners to the carousel API instance using the on method. This example demonstrates listening to the 'select' event to perform actions when the carousel slide changes.

```tsx
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Do something on select.
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

--------------------------------

### Add Simple Utility Class in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Create a simple custom utility class using @utility directive to add single CSS property utilities to Tailwind's utility layer for common styling needs.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility content-auto": {
      "content-visibility": "auto"
    }
  }
}
```

--------------------------------

### Create a new React Router project

Source: https://ui.shadcn.com/docs/installation/react-router

This command initializes a new React Router application in a directory named 'my-app' using the official project creation tool.

```bash
npx create-react-router@latest my-app
```

--------------------------------

### SVG Path Data for TanStack Start Icon

Source: https://ui.shadcn.com/docs/rtl

This SVG path data defines the visual representation of an icon, likely associated with 'TanStack Start'. It is typically embedded within an <svg> element to render a graphic in a web interface, providing a scalable vector graphic for UI elements.

```svg
M6.93 13.688a.343.343 0 0 1 .468.132l.063.106c.48.851.98 1.66 1.5 2.426a35.65 35.65 0 0 0 2.074 2.742.345.345 0 0 1-.039.484l-.074.066c-2.543 2.223-4.191 2.665-4.953 1.333-.746-1.305-.477-3.672.808-7.11a.344.344 0 0 1 .153-.18ZM17.75 16.3a.34.34 0 0 1 .395.27l.02.1c.628 3.286.187 4.93-1.325 4.93-1.48 0-3.36-1.402-5.649-4.203a.327.327 0 0 1-.074-.222c0-.188.156-.34.344-.34h.121a32.984 32.984 0 0 0 2.809-.098c1.07-.086 2.191-.23 3.359-.437zm.871-6.977a.353.353 0 0 1 .445-.21l.102.034c3.262 1.11 4.504 2.332 3.719 3.664-.766 1.305-2.993 2.254-6.684 2.848a.362.362 0 0 1-.238-.047.343.343 0 0 1-.125-.476l.062-.106a34.07 34.07 0 0 0 1.367-2.523c.477-.989.93-2.051 1.352-3.184zM7.797 8.34a.362.362 0 0 1 .238.047.343.343 0 0 1 .125.476l-.062.106a34.088 34.088 0 0 0-1.367 2.523c-.477.988-.93 2.051-1.352 3.184a.353.353 0 0 1-.445.21l-.102-.034C1.57 13.742.328 12.52 1.113 11.188 1.88 9.883 4.106 8.934 7.797 8.34Zm5.281-3.984c2.543-2.223 4.192-2.664 4.953-1.332.746 1.304.477 3.671-.808 7.109a.344.344 0 0 1-.153.18.343.343 0 0 1-.468-.133l-.063-.106a34.64 34.64 0 0 0-1.5-2.426 35.65 35.65 0 0 0-2.074-2.742.345.345 0 0 1 .039-.484ZM7.285 2.274c1.48 0 3.364 1.402 5.649 4.203a.349.349 0 0 1 .078.218.348.348 0 0 1-.348.344l-.117-.004a34.584 34.584 0 0 0-2.809.102 35.54 35.54 0 0 0-3.363.437.343.343 0 0 1-.394-.273l-.02-.098c-.629-3.285-.188-4.93 1.324-4.93Zm2.871 5.812h3.688a.638.638 0 0 1 .55.316l1.848 3.22a.644.644 0 0 1 0 .628l-1.847 3.223a.638.638 0 0 1-.551.316h-3.688a.627.627 0 0 1-.547-.316L7.758 12.25a.644.644 0 0 1 0-.629L9.61 8.402a.627.627 0 0 1 .546-.316Zm3.23.793a.638.638 0 0 1 .552.316l1.39 2.426a.644.644 0 0 1 0 .629l-1.39 2.43a.638.638 0 0 1-.551.316h-2.774a.627.627 0 0 1-.546-.316l-1.395-2.43a.644.644 0 0 1 0-.629l1.395-2.426a.627.627 0 0 1 .546-.316Zm-.491.867h-1.79a.624.624 0 0 0-.546.316l-.899 1.56a.644.644 0 0 0 0 .628l.899 1.563a.632.632 0 0 0 .547.316h1.789a.632.632 0 0 0 .547-.316l.898-1.563a.644.644 0 0 0 0-.629l-.898-1.558a.624.624 0 0 0-.547-.317Zm-.477.828c.227 0 .438.121.547.317l.422.73a.625.625 0 0 1 0 .629l-.422.734a.627.627 0 0 1-.547.317h-.836a.632.632 0 0 1-.547-.317l-.422-.734a.625.625 0 0 1 0-.629l.422-.73a.632.632 0 0 1 .547-.317zm-.418.817a.548.548 0 0 0-.473.273.547.547 0 0 0 0 .547.544.544 0 0 0 .473.27.544.544 0 0 0 .473-.27.547.547 0 0 0 0-.547.548.548 0 0 0-.473-.273Zm-4.422.546h.98M18.98 7.75c.391-1.895.477-3.344.223-4.398-.148-.63-.422-1.137-.84-1.508-.441-.39-1-.582-1.625-.582-1.035 0-2.12.472-3.281 1.367a14.9 14.9 0 0 0-1.473 1.316 1.206 1.206 0 0 0-.136-.144c-1.446-1.285-2.66-2.082-3.7-2.39-.617-.184-1.195-.2-1.722-.024-.559.187-1.004.574-1.317 1.117-.515.894-.652 2.074-.46 3.527.078.59.214 1.235.402 1.934a1.119 1.119 0 0 0-.215.047C3.008 8.62 1.71 9.269.926 10.015c-.465.442-.77.938-.883 1.481-.113.578 0 1.156.312 1.7.516.894 1.465 1.597 2.817 2.155.543.223 1.156.426 1.844.61a1.023 1.023 0 0 0-.07.226c-.391 1.891-.477 3.344-.223 4.395.148.629.425 1.14.84 1.508.44.39 1 .582 1.625.582 1.035 0 2.12-.473 3.28-1.364.477-.37.973-.816 1.489-1.336a1.2 1.2 0 0 0 .195.227c1.446 1.285 2.66 2.082 3.7 2.39.617.184 1.195.2 1.722.024.559-.187 1.004-.574 1.317-1.117.515-.894.652-2.074.46-3.527a14.941 14.941 0 0 0-.425-2.012 1.225 1.225 0 0 0 .238-.047c1.828-.61 3.125-1.258 3.91-2.004.465-.441.77-.937.883-1.48.113-.578 0-1.157-.313-1.7-.515-.894-1.464-1.597-2.816-2.156a14.576 14.576 0 0 0-1.906-.625.865.865 0 0 0 .059-.195z
```

--------------------------------

### Enable Alphanumeric Input for InputOTP Component (shadcn/ui)

Source: https://ui.shadcn.com/docs/components/base/input-otp

This example demonstrates configuring the `InputOTP` component to accept both digits and characters. It uses the `pattern` prop with `REGEXP_ONLY_DIGITS_AND_CHARS` from the `input-otp` library to allow a broader range of input. This is useful for codes that may contain a mix of letters and numbers.

```tsx
"use client"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

export function InputOTPAlphanumeric() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
```

--------------------------------

### Multiple Plugins with Automatic Deduplication

Source: https://ui.shadcn.com/docs/registry/examples

Illustrates how to declare multiple Tailwind CSS plugins with npm dependencies. The system automatically groups plugins together and removes duplicates. Multiple dependencies are declared in an array and corresponding plugins are referenced in the css object.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "multiple-plugins",
  "type": "registry:item",
  "dependencies": [
    "@tailwindcss/typography",
    "@tailwindcss/forms",
    "tw-animate-css"
  ],
  "css": {
    "@plugin \"@tailwindcss/typography\"": {},
    "@plugin \"@tailwindcss/forms\"": {},
    "@plugin \"tw-animate-css\"": {}
  }
}
```

--------------------------------

### Import Tailwind CSS in Remix Root Component

Source: https://ui.shadcn.com/docs/installation/remix

Import the tailwind.css stylesheet in your app/root.tsx file and add it to the links function to ensure global styles are applied throughout the application.

```typescript
import styles from "./tailwind.css?url"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]
```

--------------------------------

### InputGroup Component Basic Usage in TSX

Source: https://ui.shadcn.com/docs/components/base/input-group

Basic API reference example showing the InputGroup wrapper component with InputGroupInput and InputGroupAddon children. Demonstrates the fundamental structure for composing input groups with the className prop for styling.

```tsx
<InputGroup>
  <InputGroupInput />
  <InputGroupAddon />
</InputGroup>
```

--------------------------------

### Render Minimal Toggle Component (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/base/toggle

Shows the most basic JSX structure to render a `Toggle` component with default styling and content, serving as a starting point for integration.

```tsx
<Toggle>Toggle</Toggle>
```

--------------------------------

### Valid Registry JSON Structure

Source: https://ui.shadcn.com/docs/registry/registry-index

Example of a valid registry.json file that conforms to the shadcn/ui registry schema specification. The registry must include a schema reference, name, homepage, and items array containing component definitions with required metadata fields like name, type, title, description, and files array.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "login-form",
      "type": "registry:component",
      "title": "Login Form",
      "description": "A login form component.",
      "files": [
        {
          "path": "registry/new-york/auth/login-form.tsx",
          "type": "registry:component"
        }
      ]
    },
    {
      "name": "example-login-form",
      "type": "registry:component",
      "title": "Example Login Form",
      "description": "An example showing how to use the login form component.",
      "files": [
        {
          "path": "registry/new-york/examples/example-login-form.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

--------------------------------

### Build Input Groups with Buttons and Popovers in TSX

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This advanced example illustrates the use of `InputGroupButton` within `InputGroupAddon` for interactive input fields. It includes functionality like copying text to clipboard, toggling a favorite state, and integrating a `Popover` for additional information, demonstrating complex UI patterns around an input.

```tsx
"use client"

import * as React from "react"
import {
  IconCheck,
  IconCopy,
  IconInfoCircle,
  IconStar,
} from "@tabler/icons-react"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function InputGroupButtonExample() {
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Copy"
            title="Copy"
            size="icon-xs"
            onClick={() => {
              copyToClipboard("https://x.com/shadcn")
            }}
          >
            {isCopied ? <IconCheck /> : <IconCopy />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton variant="secondary" size="icon-xs">
                <IconInfoCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="flex flex-col gap-1 rounded-xl text-sm"
          >
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon className="text-muted-foreground pl-1.5">
          https://
        </InputGroupAddon>
        <InputGroupInput id="input-secure-19" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
          >
            <IconStar
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Migrate React Component from `forwardRef` to Props

Source: https://ui.shadcn.com/docs/tailwind-v4

This example demonstrates how to refactor a React component to remove `React.forwardRef`. It shows the transformation from using `forwardRef` and `displayName` to a simpler named functional component that accepts props directly and includes a `data-slot` attribute.

```tsx
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b last:border-b-0", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"
```

```tsx
function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}
```

--------------------------------

### Render a basic Empty component with actions (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/empty

Demonstrates how to use the `Empty` component to display a 'no projects' state. It includes a header with an icon, title, description, and content with multiple buttons for user actions. This example showcases a typical empty state with interactive elements.

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </EmptyContent>
      <Button
        variant="link"
        render={<a href="#" />}
        className="text-muted-foreground"
        size="sm"
        nativeButton={false}
      >
        Learn More <ArrowUpRightIcon />
      </Button>
    </Empty>
  )
}
```

--------------------------------

### Example Chart Tooltip and Bar Configuration

Source: https://ui.shadcn.com/docs/components/radix/chart

Illustrates the configuration of `ChartTooltipContent` with a custom `labelFormatter` for date display and the usage of `Bar` component within a chart, likely part of a larger React component rendering a chart inside a `Card`.

```tsx
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
```

--------------------------------

### Configure TypeScript Path Aliases in tsconfig.json

Source: https://ui.shadcn.com/docs/installation/manual

This JSON configuration snippet updates the `tsconfig.json` file to define a base URL and a path alias. The `@/*` alias maps to the project's root directory (`./*`), simplifying module imports by allowing absolute paths from the project root.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

--------------------------------

### Implementing Item with Icon and Action Button (TSX)

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This example demonstrates how to create an `Item` component that includes a prominent icon within `ItemMedia` and an action button in `ItemActions`. It's suitable for displaying alerts, notifications, or any content requiring a visual cue and an immediate user interaction, such as reviewing a security alert.

```tsx
import { ShieldAlertIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function ItemIcon() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security Alert</ItemTitle>
          <ItemDescription>
            New login detected from unknown device.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Review
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
```

--------------------------------

### Display Keyboard Shortcuts in shadcn/ui Context Menu (React)

Source: https://ui.shadcn.com/docs/components/base/context-menu

This example demonstrates how to add keyboard shortcut hints to ContextMenuItems using the ContextMenuShortcut component in shadcn/ui. It enhances user experience by visually indicating keyboard equivalents for menu actions, such as navigation ('Back', 'Forward', 'Reload') and save operations.

```tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuShortcuts() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click here
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press here
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            Save
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Save As...
            <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

--------------------------------

### Add Basic CSS Imports in shadcn/ui Registry

Source: https://ui.shadcn.com/docs/registry/examples

Include CSS imports in registry items using @import directives to load external stylesheets and frameworks. Imports are automatically placed at the top of generated CSS files.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-import",
  "type": "registry:component",
  "css": {
    "@import \"tailwindcss\"": {},
    "@import \"./styles/base.css\"": {}
  }
}
```

--------------------------------

### DataTablePagination Component Usage

Source: https://ui.shadcn.com/docs/components/data-table

Demonstrates how to integrate the DataTablePagination component into a React application by passing a configured TanStack React Table instance as a prop.

```typescript
<DataTablePagination table={table} />
```

--------------------------------

### Handle unknown shadcn registry errors

Source: https://ui.shadcn.com/docs/registry/namespace

Shows the error message encountered when attempting to install a component from a registry that is not configured in `components.json`. It also provides the JSON snippet for defining a new registry to resolve this error.

```bash
npx shadcn@latest add @non-existent/component
```

```txt
Unknown registry "@non-existent". Make sure it is defined in components.json as follows:
{
  "registries": {
    "@non-existent": "[URL_TO_REGISTRY]"
  }
}
```

--------------------------------

### Add Custom Theme Variables to shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Define custom CSS variables in the theme object to extend shadcn/ui's design system with project-specific values for typography, shadows, and other design tokens.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "font-heading": "Inter, sans-serif",
      "shadow-card": "0 0 0 1px rgba(0, 0, 0, 0.1)"
    }
  }
}
```

--------------------------------

### Generate Tokens with Expiration

Source: https://ui.shadcn.com/docs/registry/authentication

Create secure authentication tokens with automatic expiration dates for enhanced security. Tokens expire after a specified period (30 days in this example) to limit exposure from compromised credentials.

```typescript
function generateToken() {
  const token = crypto.randomBytes(32).toString("hex")
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

  return { token, expiresAt }
}
```

--------------------------------

### Registry Authentication for Open in v0

Source: https://ui.shadcn.com/docs/registry/open-in-v0

This section describes the recommended authentication mechanism for registry servers to integrate with Open in v0. Registry items can be accessed with a `token` query parameter for authentication.

```APIDOC
## GET /r/{item}.json (Registry Server Authentication)

### Description
This describes how a registry server should implement authentication for its items when accessed by `Open in v0`. It uses a `token` query parameter for authentication.

### Method
GET

### Endpoint
/r/{item}.json

### Parameters
#### Path Parameters
- **item** (string) - Required - The path to the specific registry item, typically ending with `.json`.

#### Query Parameters
- **token** (string) - Optional - A secure token used to authenticate access to the registry item. If provided, the server should validate it.

#### Request Body
(None)

### Request Example
(N/A for GET request with query parameters)

### Response
#### Success Response (200)
- Returns the content of the registry item (e.g., JSON).

#### Response Example
```json
{
  "name": "login-01",
  "description": "A login form with email and password fields.",
  "component": "<Login01 />"
}
```

#### Error Response (401 Unauthorized)
- **error** (string) - The error type, typically "Unauthorized".
- **message** (string) - A descriptive message about the authorization failure.

#### Response Example
```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing token"
}
```
```

--------------------------------

### Add Autoplay Plugin to Carousel

Source: https://ui.shadcn.com/docs/components/radix/carousel

Demonstrates how to use the `plugins` prop to add the Autoplay plugin to the carousel. The example shows configuration with a 2-second delay and includes mouse event handlers to pause and resume autoplay on user interaction.

```tsx
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}
```

```tsx
"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[10rem] sm:max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

--------------------------------

### Import and Use Calendar Component in React

Source: https://ui.shadcn.com/docs/components/base/calendar

Shows how to import the Calendar component and implement single date selection with state management. Includes the basic setup with mode, selected, and onSelect props for handling date changes.

```tsx
import { Calendar } from "@/components/ui/calendar"

const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
)
```

--------------------------------

### Basic NativeSelect Component Usage

Source: https://ui.shadcn.com/docs/components/base/native-select

A simple example of the NativeSelect component wrapping native HTML select elements with NativeSelectOption children. Demonstrates basic usage without RTL or translation features.

```typescript
<NativeSelect>
  <NativeSelectOption value="option1">Option 1</NativeSelectOption>
  <NativeSelectOption value="option2">Option 2</NativeSelectOption>
</NativeSelect>
```

--------------------------------

### Implement a Complex Form with Shadcn UI Field Components (React)

Source: https://ui.shadcn.com/docs/components/radix/label

This comprehensive example demonstrates building a multi-section form using various Shadcn UI field components like `FieldGroup`, `FieldSet`, `FieldLegend`, `FieldDescription`, and `FieldSeparator`. It showcases how to structure complex forms, including input fields, select dropdowns, and checkboxes, while maintaining accessibility and clear labeling. The example imports several UI components, indicating dependencies on the Shadcn UI library.

```tsx
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function FieldDemo() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Month
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                        <SelectItem value="04">04</SelectItem>
                        <SelectItem value="05">05</SelectItem>
                        <SelectItem value="06">06</SelectItem>
                        <SelectItem value="07">07</SelectItem>
                        <SelectItem value="08">08</SelectItem>
                        <SelectItem value="09">09</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Year
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                        <SelectItem value="2029">2029</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="checkout-7j9-same-as-shipping-wgm"
                  defaultChecked
                />
                <FieldLabel
```

--------------------------------

### Add Component CSS Layer in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Define component-level styles using Tailwind's @layer components directive to create reusable styled components like cards with consistent design properties.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-card",
  "type": "registry:component",
  "css": {
    "@layer components": {
      "card": {
        "background-color": "var(--color-white)",
        "border-radius": "var(--rounded-lg)",
        "padding": "var(--spacing-6)",
        "box-shadow": "var(--shadow-xl)"
      }
    }
  }
}
```

--------------------------------

### Configure components.json with import aliases

Source: https://ui.shadcn.com/docs/changelog/2024-08-npx-shadcn-init

Update the components.json configuration file to define import aliases for components, utils, ui, lib, and hooks directories. This configuration is required for the new CLI to properly resolve and install dependencies. The schema references the official shadcn UI schema for validation.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "tailwind": {
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

--------------------------------

### Implement Basic Horizontal Resizable Panel Group in React (TypeScript)

Source: https://ui.shadcn.com/docs/components/base/resizable

Demonstrates a minimal example of a horizontal resizable panel group with two panels and a handle. This snippet shows the fundamental structure for creating a simple split layout.

```tsx
<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
```

--------------------------------

### Add Shadcn UI Block using CLI

Source: https://ui.shadcn.com/docs/changelog/2026-02-blocks

This command demonstrates how to add a specific UI block, such as 'login-01', to your project using the Shadcn CLI. The CLI automatically detects your project's configuration (Radix or Base UI) and pulls the correct block variant without additional setup.

```bash
npx shadcn@latest add login-01
```

--------------------------------

### Combined Imports and Plugins with Ordered CSS Processing

Source: https://ui.shadcn.com/docs/registry/examples

Shows the proper ordering of CSS directives in shadcn UI: imports first, then plugins, followed by layer and utility declarations. This pattern ensures correct CSS cascade and specificity when using both `@import` and `@plugin` directives with custom layers and utilities.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "combined-example",
  "type": "registry:item",
  "dependencies": ["@tailwindcss/typography", "tw-animate-css"],
  "css": {
    "@import \"tailwindcss\"": {},
    "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\")": {},
    "@plugin \"@tailwindcss/typography\"": {},
    "@plugin \"tw-animate-css\"": {},
    "@layer base": {
      "body": {
        "font-family": "Inter, sans-serif"
      }
    },
    "@utility content-auto": {
      "content-visibility": "auto"
    }
  }
}
```

--------------------------------

### Basic Usage of shadcn/ui Select Component in React

Source: https://ui.shadcn.com/docs/components/select

This React JSX example demonstrates how to construct a basic 'Select' dropdown. It includes a 'SelectTrigger' with a placeholder, and 'SelectContent' containing a 'SelectGroup' with multiple 'SelectItem' options. The 'className' prop is used for basic styling.

```jsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

--------------------------------

### Implement a basic Shadcn UI Alert Dialog example in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/alert-dialog

This snippet provides a complete functional React component `AlertDialogBasic` demonstrating a basic alert dialog. It includes imports for `AlertDialog` and `Button`, and sets up a dialog with a trigger, title, description, and standard cancel/continue actions.

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogBasic() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">Show Dialog</Button>}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

--------------------------------

### Render a square AspectRatio component with Image in TSX

Source: https://ui.shadcn.com/docs/components/base/aspect-ratio

This example showcases how to configure the `AspectRatio` component for a perfect 1:1 (square) ratio. It's ideal for displaying profile pictures, thumbnails, or other content that requires a square format, ensuring consistent dimensions.

```tsx
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioSquare() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="bg-muted w-full max-w-[12rem] rounded-lg"
    >
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="Photo"
        fill
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}
```

--------------------------------

### Example `shadcn diff` Output for a Specific Component

Source: https://ui.shadcn.com/docs/changelog/2023-06-new-cli

This `diff` output illustrates changes made to a specific component, in this case, `alert`. It shows a modification where a CSS class `pl-12` was added to the `alertVariants` definition, indicating a change in padding.

```diff
const alertVariants = cva(
- "relative w-full rounded-lg border",
+ "relative w-full pl-12 rounded-lg border"
)
```

--------------------------------

### Render a basic Dropdown Menu in React (TSX)

Source: https://ui.shadcn.com/docs/components/base/dropdown-menu

This snippet demonstrates a basic implementation of the `DropdownMenu` component, including a trigger button, content, groups, labels, and menu items. It provides a foundational example for displaying a simple dropdown with minimal configuration.

```tsx
<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    Open
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuSeparator />
    </DropdownMenuGroup>
    <DropdownMenuGroup>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
```

--------------------------------

### Use Popover with Inline-Start Side Value

Source: https://ui.shadcn.com/docs/changelog/2026-01-inline-side-styles

Demonstrates usage of Popover component with side="inline-start" prop. The content opens on the left in LTR layouts and on the right in RTL layouts, providing automatic directional adaptation.

```tsx
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent side="inline-start">
    {/* Opens on the left in LTR, right in RTL */}
  </PopoverContent>
</Popover>
```

--------------------------------

### Implement RTL Data Table with shadcn/ui and React Table in TypeScript

Source: https://ui.shadcn.com/docs/components/base/data-table

This TypeScript code provides a full example of a data table component (`DataTableRtl`) that supports Right-to-Left (RTL) layouts. It integrates shadcn/ui components (Button, Checkbox, DropdownMenu, Input, Table) with `@tanstack/react-table` for advanced table functionalities like sorting, filtering, pagination, and column visibility. The example also includes a custom `useTranslation` hook to manage multi-language content (English, Arabic, Hebrew) and dynamically adjust text direction.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/examples/base/ui-rtl/button"
import { Checkbox } from "@/examples/base/ui-rtl/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/examples/base/ui-rtl/dropdown-menu"
import { Input } from "@/examples/base/ui-rtl/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/examples/base/ui-rtl/table"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      filterEmails: "Filter emails...",
      columns: "Columns",
      status: "Status",
      email: "Email",
      amount: "Amount",
      actions: "Actions",
      copyPaymentId: "Copy payment ID",
      viewCustomer: "View customer",
      viewPaymentDetails: "View payment details",
      selectAll: "Select all",
      selectRow: "Select row",
      openMenu: "Open menu",
      noResults: "No results.",
      rowsSelected: "of",
      rowsSelectedSuffix: "row(s) selected.",
      previous: "Previous",
      next: "Next",
      success: "Success",
      processing: "Processing",
      failed: "Failed",
      pending: "Pending",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      filterEmails: "تصفية البريد الإلكتروني...",
      columns: "الأعمدة",
      status: "الحالة",
      email: "البريد الإلكتروني",
      amount: "المبلغ",
      actions: "الإجراءات",
      copyPaymentId: "نسخ معرف الدفع",
      viewCustomer: "عرض العميل",
      viewPaymentDetails: "عرض تفاصيل الدفع",
      selectAll: "تحديد الكل",
      selectRow: "تحديد الصف",
      openMenu: "فتح القائمة",
      noResults: "لا توجد نتائج.",
      rowsSelected: "من",
      rowsSelectedSuffix: "صف(وف) محدد.",
      previous: "السابق",
      next: "التالي",
      success: "ناجح",
      processing: "قيد المعالجة",
      failed: "فشل",
      pending: "قيد الانتظار",
    },
  },
  he: {
    dir: "rtl",
    values: {
      filterEmails: "סנן אימיילים...",
      columns: "עמודות",
      status: "סטטוס",
      email: "אימייל",
      amount: "סכום",
      actions: "פעולות",
      copyPaymentId: "העתק מזהה תשלום",
      viewCustomer: "צפה בלקוח",
      viewPaymentDetails: "צפה בפרטי תשלום",
      selectAll: "בחר הכל",
      selectRow: "בחר שורה",
      openMenu: "פתח תפריט",
      noResults: "אין תוצאות.",
      rowsSelected: "מתוך",
      rowsSelectedSuffix: "שורות נבחרו.",
      previous: "הקודם",
      next: "הבא",
      success: "הצליח",
      processing: "מעבד",
      failed: "נכשל",
      pending: "ממתין",
    },
  },
}

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
]

export function DataTableRtl() {
  const { t, dir, language } = useTranslation(translations, "ar")
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const columns: ColumnDef<Payment>[] = React.useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() ? true : false)
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label={t.selectAll}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label={t.selectRow}
          />
        ),
        enableSorting: false,
        enableHiding: false,
```

--------------------------------

### Render Disabled Toggle Components (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/base/toggle

Demonstrates how to render `Toggle` components in a disabled state using the `disabled` prop. Examples include both default and outline variants to show consistent behavior.

```tsx
import { Toggle } from "@/components/ui/toggle"

export function ToggleDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Toggle disabled" disabled>
        Disabled
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle disabled outline" disabled>
        Disabled
      </Toggle>
    </div>
  )
}
```

--------------------------------

### Configure Shadcn MCP Server in VS Code with GitHub Copilot

Source: https://ui.shadcn.com/docs/mcp

This configuration adds the shadcn MCP server to VS Code's `.vscode/mcp.json` file for use with GitHub Copilot. It specifies `npx shadcn@latest mcp` as the command. Users need to save the file and click 'Start' next to the shadcn server to activate it.

```json
{
  "servers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

--------------------------------

### Basic Kbd Component Usage

Source: https://ui.shadcn.com/docs/components/base/kbd

Demonstrates how to import and use the basic Kbd component to display a single keyboard key. The component accepts keyboard symbols or text as children and renders them in a styled keyboard key format.

```typescript
import { Kbd } from "@/components/ui/kbd"

<Kbd>Ctrl</Kbd>
```

--------------------------------

### Configure RTL Translations in shadcn/ui with TypeScript

Source: https://ui.shadcn.com/docs/components/radix/typography

Sets up a translations object with language-specific direction (dir) and content values for both LTR and RTL languages. This example includes English and Arabic translations with complete story content, demonstrating how to structure multi-language support with proper text direction configuration.

```tsx
"use client"

import * as React from "react"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      title: "Taxing Laughter: The Joke Tax Chronicles",
      leadParagraph:
        "Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.",
      kingsPlan: "The King's Plan",
      kingThought: "The king thought long and hard, and finally came up with",
      brilliantPlan: "a brilliant plan",
      taxJokes: ": he would tax the jokes in the kingdom.",
      blockquote:
        '"After all," he said, "everyone enjoys a good joke, so it\'s only fair that they should pay for the privilege."',
      jokeTax: "The Joke Tax",
      subjectsNotAmused:
        "The king's subjects were not amused. They grumbled and complained, but the king was firm:",
      level1: "1st level of puns: 5 gold coins",
      level2: "2nd level of jokes: 10 gold coins",
      level3: "3rd level of one-liners: 20 gold coins",
      stoppedTelling:
        "As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who refused to let the king's foolishness get him down: a court jester named Jokester.",
      jokestersRevolt: "Jokester's Revolt",
      sneaking:
        "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester.",
      discovered:
        "And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop.",
      peoplesRebellion: "The People's Rebellion",
      uplifted:
        "The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the entire kingdom was in on the joke.",
      kingsTreasury: "King's Treasury",
      peoplesHappiness: "People's happiness",
      empty: "Empty",
      overflowing: "Overflowing",
      modest: "Modest",
      satisfied: "Satisfied",
      full: "Full",
      ecstatic: "Ecstatic",
      realized:
        "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax. Jokester was declared a hero, and the kingdom lived happily ever after.",
      moral:
        "The moral of the story is: never underestimate the power of a good laugh and always be careful of bad ideas."
    }
  },
  ar: {
    dir: "rtl",
    values: {
      title: "فرض الضرائب على الضحك: سجلات ضريبة النكتة",
      leadParagraph:
        "في قديم الزمان، في أرض بعيدة، كان هناك ملك كسول جداً يقضي يومه كله مستلقياً على عرشه. في أحد الأيام، جاءه مستشاروه بمشكلة: المملكة كانت تنفد من المال.",
      kingsPlan: "خطة الملك",
      kingThought: "فكر الملك طويلاً وبجد، وأخيراً توصل إلى",
      brilliantPlan: "خطة عبقرية",
      taxJokes: ": سيفرض ضريبة على النكات في المملكة.",
      blockquote:
        '"في النهاية،" قال، "الجميع يستمتع بنكتة جيدة، لذا من العدل أن يدفعوا مقابل هذا الامتياز."',
      jokeTax: "ضريبة النكتة",
      subjectsNotAmused:
        "لم يكن رعايا الملك سعداء. تذمروا واشتكوا، لكن الملك كان حازماً:",
      level1: "المستوى الأول من التورية: 5 قطع ذهبية",
      level2: "المستوى الثاني من النكات: 10 قطع ذهبية",
      level3: "المستوى الثالث من النكات القصيرة: 20 قطعة ذهبية",
      stoppedTelling:
        "نتيجة لذلك، توقف الناس عن رواية النكات، وغرقت المملكة في الكآبة. لكن كان هناك شخص واحد رفض أن تحبطه حماقة الملك: مهرج البلاط المسمى المازح.",
      jokestersRevolt: "ثورة المازح",
      sneaking:
        "بدأ المازح يتسلل إلى القلعة في منتصف الليل ويترك النكات في كل مكان: تحت وسادة الملك، في حسائه، حتى في المرحاض الملكي. كان الملك غاضباً، لكنه لم يستطع إيقاف المازح.",
      discovered:
        "وبعد ذلك، في يوم من الأيام، اكتشف سكان المملكة أن النكات التي تركها المازح كانت مضحكة جداً لدرجة أنهم لم يستطيعوا منع أنفسهم من الضحك. وبمجرد أن بدأوا بالضحك، لم يستطيعوا التوقف.",
      peoplesRebellion: "ثورة الشعب",
      uplifted:
        "شعر سكان المملكة بالبهجة من الضحك، وبدأوا في رواية النكات والتورية مرة أخرى، وسرعان ما أصبحت المملكة بأكملها جزءاً من النكتة.",
      kingsTreasury: "خزينة الملك",
      peoplesHappiness: "سعادة الشعب",
      empty: "فارغة",
      overflowing: "فائضة",
      modest: "متواضعة",
      satisfied: "راضٍ",
      full: "ممتلئة",
      ecstatic: "منتشٍ",
      realized:
        "الملك، عندما رأى مدى سعادة رعاياه، أدرك خطأ طرقه وألغى ضريبة النكتة. أُعلن المازح بطلاً، وعاشت المملكة في سعادة دائمة.",
      moral:
        "مغزى القصة هو: لا تستهن أبداً بقوة الضحك الجيد وكن دائماً حذراً من الأفكار السيئة."
    }
  }
}

```

--------------------------------

### Implement AspectRatio component with an Image in TSX

Source: https://ui.shadcn.com/docs/components/base/aspect-ratio

This example demonstrates how to embed an `Image` component within `AspectRatio`, setting a 16:9 ratio. It illustrates the basic JSX structure for applying aspect ratio constraints to visual content, ensuring consistent display.

```tsx
<AspectRatio ratio={16 / 9}>
  <Image src="..." alt="Image" className="rounded-md object-cover" />
</AspectRatio>
```

--------------------------------

### Button Group with Dropdown Menu Demo

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

Comprehensive example demonstrating a button group with multiple action buttons, dropdown menus with submenus, radio groups, and destructive actions. Includes responsive design with hidden elements on small screens and state management for label selection.

```tsx
"use client"

import * as React from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal")

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="More Options">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterIcon />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={label}
                    onValueChange={setLabel}
                  >
                    <DropdownMenuRadioItem value="personal">
                      Personal
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">
                      Work
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">
                      Other
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}
```

--------------------------------

### Basic Collapsible with Product Details

Source: https://ui.shadcn.com/docs/components/base/collapsible

Example implementation of a Collapsible component within a Card showing product details. Features a chevron icon that rotates on expand, custom styling, and a call-to-action button in the content area.

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { ChevronDownIcon } from "@/registry/icons/__lucide__"

export function CollapsibleBasic() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible className="data-open:bg-muted rounded-md">
          <CollapsibleTrigger
            render={<Button variant="ghost" className="w-full" />}
          >
            Product details
            <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>
              This panel can be expanded or collapsed to reveal additional
              content.
            </div>
            <Button size="xs">Learn More</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
```

--------------------------------

### Define Registry Dependencies in Registry Item (JSON)

Source: https://ui.shadcn.com/docs/registry/namespace

This JSON snippet from a `registry-item.json` shows how components declare their `registryDependencies`. It illustrates how dependencies from various registries are listed, enabling the CLI to automatically resolve and install them.

```json
{
  "name": "dashboard",
  "type": "registry:block",
  "registryDependencies": [
    "@shadcn/card",
    "@v0/chart",
    "@acme/data-table",
    "@lib/data-fetcher",
    "@ai/analytics-prompt"
  ]
}
```

--------------------------------

### Creating Links with Shadcn UI Item and asChild Prop (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/radix/item

This example illustrates how to transform a Shadcn UI `Item` component into an anchor (`<a>`) element using the `asChild` prop. It demonstrates both internal and external links, including the use of `ItemActions` with icons to indicate navigation or external resources.

```tsx
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"

export function ItemLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Visit our documentation</ItemTitle>
            <ItemDescription>
              Learn how to get started with our components.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
      <Item variant="outline" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <ItemContent>
            <ItemTitle>External resource</ItemTitle>
            <ItemDescription>
              Opens in a new tab with security attributes.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ExternalLinkIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}
```

--------------------------------

### Configure TypeScript Path Resolution in tsconfig.json

Source: https://ui.shadcn.com/docs/installation/astro

Adds baseUrl and path aliases to tsconfig.json to enable absolute imports using the '@/*' alias. This configuration allows cleaner imports for shadcn/ui components located in the src directory.

```typescript
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

--------------------------------

### Basic Empty Component Usage with Icon Media and Action (TSX)

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This example illustrates the fundamental structure for using the `Empty` component. It shows how to display an icon (`InboxIcon`) as media, a title, a descriptive message, and a call-to-action button within the empty state, suitable for 'no messages' scenarios.

```tsx
<Empty>
  <EmptyMedia variant="icon">
    <InboxIcon />
  </EmptyMedia>
  <EmptyTitle>No messages</EmptyTitle>
  <EmptyDescription>You don't have any messages yet.</EmptyDescription>
  <EmptyContent>
    <Button>Send a message</Button>
  </EmptyContent>
</Empty>
```

--------------------------------

### Wrap App with DirectionProvider in Root Route

Source: https://ui.shadcn.com/docs/rtl/start

Configure the root route component to set HTML language and direction attributes, then wrap the application with DirectionProvider component to enable RTL support throughout the app. Update lang attribute to your target language.

```tsx
import { DirectionProvider } from "@/components/ui/direction"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Meta />
      </head>
      <body>
        <DirectionProvider direction="rtl">{children}</DirectionProvider>
        <Scripts />
      </body>
    </html>
  )
}
```

--------------------------------

### Configure TypeScript Path Resolution in tsconfig.json

Source: https://ui.shadcn.com/docs/installation/gatsby

Configure the TypeScript compiler to resolve path aliases starting with '@/' to the './src/' directory. This enables cleaner import statements throughout your project.

```typescript
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

--------------------------------

### Render Basic Shadcn UI Button in TypeScript React

Source: https://ui.shadcn.com/docs/components/base/button

This snippet shows a simple JSX example of rendering the Shadcn UI `Button` component with an `outline` variant. It demonstrates the basic structure for using the component in a React application.

```tsx
<Button variant="outline">Button</Button>
```

--------------------------------

### Implement Basic NativeSelect Component in TypeScript React

Source: https://ui.shadcn.com/docs/components/base/native-select

This example demonstrates how to create a basic `NativeSelect` component with several `NativeSelectOption` elements. It showcases the component's structure for displaying a list of selectable statuses. The component relies on `@/components/ui/native-select` for its implementation.

```tsx
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function NativeSelectDemo() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">Select status</NativeSelectOption>
      <NativeSelectOption value="todo">Todo</NativeSelectOption>
      <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
      <NativeSelectOption value="done">Done</NativeSelectOption>
      <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
    </NativeSelect>
  )
}
```

--------------------------------

### Basic Toggle Group with Icons - React/TypeScript

Source: https://ui.shadcn.com/docs/components/radix/toggle-group

Demonstrates a toggle group with multiple selection mode using icon buttons from lucide-react. This example shows how to create a text formatting toolbar with bold, italic, and underline options.

```typescript
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
```

--------------------------------

### Display Empty State Title in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/empty

This snippet provides an example of the `EmptyTitle` component, used to render the main title or heading for an empty state message. It clearly communicates the primary message to the user.

```tsx
<EmptyTitle>No data</EmptyTitle>
```

--------------------------------

### Basic Field component usage with Input in TSX

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This example illustrates the basic usage of the `Field` component to wrap an `Input` element. It includes `FieldLabel` for accessibility and `FieldDescription` to provide additional context, demonstrating a simple, well-structured form input. The snippet shows how individual form fields are composed.

```tsx
<Field>
  <FieldLabel htmlFor="username">Username</FieldLabel>
  <Input id="username" placeholder="Max Leiter" />
  <FieldDescription>
    Choose a unique username for your account.
  </FieldDescription>
</Field>
```

--------------------------------

### Install shadcn/ui Breadcrumb Component with pnpm

Source: https://ui.shadcn.com/docs/components/breadcrumb

Command to add the Breadcrumb component to your project using the `pnpm` package manager and `shadcn/ui` CLI. This command fetches and adds the component's files to your project, making them available for use.

```shell
pnpm dlx shadcn@latest add breadcrumb
```

--------------------------------

### Initialize MCP Server for shadcn

Source: https://ui.shadcn.com/docs/changelog/2025-08-cli-3-mcp

Set up the MCP server for shadcn CLI with zero configuration required. The server works with all configured registries and integrates with popular MCP clients.

```bash
npx shadcn@latest mcp init
```

--------------------------------

### View Registry Items with view Command

Source: https://ui.shadcn.com/docs/cli

The view command displays component details from registries before installation. It supports viewing single or multiple items and accessing namespaced registries. This allows previewing components from different registry sources like @acme or @v0.

```bash
npx shadcn@latest view [item]
```

```bash
npx shadcn@latest view button card dialog
```

```bash
npx shadcn@latest view @acme/auth @v0/dashboard
```

```bash
Usage: shadcn view [options] <items...>

view items from the registry

Arguments:
  items            the item names or URLs to view

Options:
  -c, --cwd <cwd>  the working directory. defaults to the current directory.
  -h, --help       display help for command
```

--------------------------------

### Import and use shadcn/ui Button component in TSX

Source: https://ui.shadcn.com/docs/installation/tanstack

This TypeScript React (TSX) code demonstrates how to import and render the `Button` component from shadcn/ui. It shows a basic functional component `App` that includes the `Button` element, ready for user interaction.

```tsx
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

--------------------------------

### Interactive Drawer with Chart and State Management in React

Source: https://ui.shadcn.com/docs/components/base/drawer

Build an interactive drawer component with state management, increment/decrement buttons, and a responsive bar chart. This example demonstrates advanced usage including goal tracking, data visualization with Recharts, and conditional button states.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
]

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-muted-foreground text-[0.70rem] uppercase">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "var(--chart-1)",
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
```

--------------------------------

### Search shadcn registries for resources

Source: https://ui.shadcn.com/docs/registry/namespace

Illustrates how to search for available resources across different registries using the 'search' command. This includes searching specific registries, querying results, searching multiple registries, limiting results, and listing all items.

```bash
npx shadcn@latest search @v0
```

```bash
npx shadcn@latest search @acme --query "auth"
```

```bash
npx shadcn@latest search @v0 @acme @lib
```

```bash
npx shadcn@latest search @v0 --limit 10 --offset 20
```

```bash
npx shadcn@latest list @acme
```

--------------------------------

### Hover Card Demo with Button Trigger

Source: https://ui.shadcn.com/docs/components/radix/hover-card

Complete example of a Hover Card with a styled Button trigger component. Displays user profile information with custom styling, including name, description, and join date.

```tsx
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover Here</Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@nextjs</div>
        <div>The React Framework – created and maintained by @vercel.</div>
        <div className="text-muted-foreground mt-1 text-xs">
          Joined December 2021
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
```

--------------------------------

### Authenticate registry requests - Next.js (TypeScript)

Source: https://ui.shadcn.com/docs/registry/open-in-v0

Example Next.js API route that validates a `token` query parameter and returns a 401 JSON error for invalid or missing tokens. Dependencies: NextRequest, NextResponse, and an `isValidToken` function plus a `registryItem` to return on success. Limitation: `isValidToken` and `registryItem` are placeholders and must be implemented according to your auth and data models.

```typescript
// Next.js API route example
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")

  if (!isValidToken(token)) {
    return NextResponse.json(
      {
        error: "Unauthorized",
        message: "Invalid or missing token",
      },
      { status: 401 }
    )
  }

  // Return the registry item
  return NextResponse.json(registryItem)
}

```

--------------------------------

### Sheet Component with Form Demo

Source: https://ui.shadcn.com/docs/components/radix/sheet

Complete Sheet example with form inputs for editing a profile. Includes a trigger button, header section, form fields with labels and inputs, and a footer with save and close buttons. Demonstrates practical usage with Button and Input components.

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
```

--------------------------------

### Implement AspectRatio with RTL support and internationalization in TSX

Source: https://ui.shadcn.com/docs/components/base/aspect-ratio

This advanced example integrates `AspectRatio` with Right-to-Left (RTL) language support and internationalization using `useTranslation`. It demonstrates how to dynamically adjust text direction and captions based on language, ensuring a localized user experience.

```tsx
"use client"

import * as React from "react"
import Image from "next/image"
import { AspectRatio } from "@/examples/base/ui-rtl/aspect-ratio"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      caption: "Beautiful landscape",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      caption: "منظر طبيعي جميل",
    },
  },
  he: {
    dir: "rtl",
    values: {
      caption: "נוף יפה",
    },
  },
}

export function AspectRatioRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <figure className="w-full max-w-sm" dir={dir}>
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <Image
          src="https://avatar.vercel.sh/shadcn1"
          alt="Photo"
          fill
          className="rounded-lg object-cover grayscale dark:brightness-20"
        />
      </AspectRatio>
      <figcaption className="text-muted-foreground mt-2 text-center text-sm">
        {t.caption}
      </figcaption>
    </figure>
  )
}
```

--------------------------------

### Render a basic Shadcn UI Table structure in TypeScript/React

Source: https://ui.shadcn.com/docs/components/base/table

This snippet provides a basic example of rendering a Shadcn UI Table component with a caption, header, and a single row of data. It demonstrates the fundamental structure of the Table, TableHeader, TableBody, TableRow, TableHead, and TableCell components.

```tsx
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

--------------------------------

### Define custom theme with OKLCH color values

Source: https://ui.shadcn.com/docs/registry/examples

Create a custom registry theme using OKLCH color space for light and dark modes, defining colors for background, foreground, primary, ring, and sidebar-specific variables. OKLCH provides perceptually uniform color values for better color consistency across themes.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "light": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.546 0.245 262.881)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.746 0.16 232.661)",
      "sidebar-primary": "oklch(0.546 0.245 262.881)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.746 0.16 232.661)"
    },
    "dark": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.707 0.165 254.624)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.707 0.165 254.624)",
      "sidebar-primary": "oklch(0.707 0.165 254.624)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.707 0.165 254.624)"
    }
  }
}
```

--------------------------------

### Group multiple Input Fields into a form (TypeScript/TSX)

Source: https://ui.shadcn.com/docs/components/base/input

Shows how to organize multiple `Field` components within a `FieldGroup` to build a complete form section. This example includes various input types and action buttons, illustrating a common form layout pattern for user data entry.

```tsx
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputFieldgroup() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
        <Input id="fieldgroup-name" placeholder="Jordan Lee" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="email"
          placeholder="name@example.com"
        />
        <FieldDescription>
          We&apos;ll send updates to this address.
        </FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </Field>
    </FieldGroup>
  )
}
```

--------------------------------

### Applying Different Sizes to the Spinner Component (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/spinner

Illustrates how to control the visual size of the `Spinner` component using Tailwind CSS `size-*` utility classes. This example showcases spinners of various dimensions, demonstrating flexibility for different UI contexts.

```tsx
import { Spinner } from "@/components/ui/spinner"

export function SpinnerSize() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  )
}
```

--------------------------------

### Tooltip with Multiple Side Positions

Source: https://ui.shadcn.com/docs/components/radix/tooltip

Demonstrates using the `side` prop to position tooltips in different directions (left, top, bottom, right). Maps over an array of side values to render multiple tooltip examples with directional positioning.

```tsx
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {(["left", "top", "bottom", "right"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-fit capitalize">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
```

--------------------------------

### Import RTL Font in CSS and Configure Theme

Source: https://ui.shadcn.com/docs/rtl/start

Import the Noto Sans Arabic font in your styles.css file and configure the Tailwind theme to use it as the default sans-serif font for proper RTL text rendering.

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "@fontsource-variable/noto-sans-arabic";

@theme inline {
  --font-sans: "Noto Sans Arabic Variable", sans-serif;
}
```

--------------------------------

### Carousel Item Sizing - Fixed Width

Source: https://ui.shadcn.com/docs/components/radix/carousel

Example showing how to set fixed item width using basis-1/3 utility class, making each item occupy 33% of the carousel width. All items maintain equal width.

```typescript
// 33% of the carousel width.
<Carousel>
  <CarouselContent>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
    <CarouselItem className="basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

--------------------------------

### Calendar with Week Numbers Display

Source: https://ui.shadcn.com/docs/components/base/calendar

Enable week number display in the calendar component using the showWeekNumber prop. This example demonstrates a single-mode calendar with week numbers visible alongside the date grid.

```tsx
"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"

export function CalendarWeekNumbers() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 0, 12)
  )

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          showWeekNumber
        />
      </CardContent>
    </Card>
  )
}
```

--------------------------------

### Create Nested Resizable Panel Group in React (TypeScript)

Source: https://ui.shadcn.com/docs/components/base/resizable

Demonstrates how to build a complex resizable layout using `ResizablePanelGroup`, `ResizablePanel`, and `ResizableHandle` components. This example showcases both horizontal and nested vertical panel groups within a single layout.

```tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="max-w-sm rounded-lg border"
    >
      <ResizablePanel defaultSize="50%">
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="25%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="75%">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

--------------------------------

### Use Environment Variables for Dynamic Version Selection

Source: https://ui.shadcn.com/docs/registry/namespace

Implements version control through environment variables, enabling different versions across environments (dev, staging, production). Allows centralized version management without hardcoding values.

```json
{
  "@stable": {
    "url": "https://registry.company.com/{name}",
    "params": {
      "version": "${REGISTRY_VERSION}"
    }
  }
}
```

--------------------------------

### Render Basic NativeSelect with Options in TypeScript React

Source: https://ui.shadcn.com/docs/components/base/native-select

This example demonstrates how to render a simple `NativeSelect` component populated with various fruit options. It shows the basic JSX structure for defining a dropdown list. The first option is typically a placeholder, and subsequent options provide selectable values.

```tsx
<NativeSelect>
  <NativeSelectOption value="">Select a fruit</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
  <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
</NativeSelect>
```

--------------------------------

### Create Vertical Resizable Panel Group in React (TypeScript)

Source: https://ui.shadcn.com/docs/components/base/resizable

Provides an example of configuring `ResizablePanelGroup` with `orientation="vertical"` to achieve a vertical split layout. This allows users to resize panels stacked on top of each other.

```tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableVertical() {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="min-h-[200px] max-w-sm rounded-lg border"
    >
      <ResizablePanel defaultSize="25%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="75%">
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

--------------------------------

### Create Small Alert Dialog with Media in React

Source: https://ui.shadcn.com/docs/components/base/alert-dialog

Combines small size and media element features by using both size="sm" prop and AlertDialogMedia component. This example shows a Bluetooth accessory connection dialog with a BluetoothIcon from lucide-react. Demonstrates how to layer multiple AlertDialog features for enhanced UI presentation.

```typescript
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { BluetoothIcon } from "lucide-react"

export function AlertDialogSmallWithMedia() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">Show Dialog</Button>}
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <BluetoothIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
          <AlertDialogAction>Allow</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

--------------------------------

### Portrait Aspect Ratio Component - TypeScript React

Source: https://ui.shadcn.com/docs/components/radix/aspect-ratio

Example implementation of AspectRatio with a 9:16 (portrait) ratio. Ideal for displaying portrait-oriented images with appropriate width constraints and styling for rounded corners and visual effects.

```typescript
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioPortrait() {
  return (
    <div className="w-full max-w-[10rem]">
      <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg">
        <Image
          src="https://avatar.vercel.sh/shadcn1"
          alt="Photo"
          fill
          className="rounded-lg object-cover grayscale dark:brightness-20"
        />
      </AspectRatio>
    </div>
  )
}
```

--------------------------------

### Nest ButtonGroup Components in TypeScript/TSX

Source: https://ui.shadcn.com/docs/components/radix/button-group

This example shows how to nest `ButtonGroup` components to achieve specific spacing and layout. It combines a button group with an input group, including a tooltip, to create a complex UI element.

```tsx
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AudioLinesIcon, PlusIcon } from "lucide-react"

export function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupAddon align="inline-end">
                <AudioLinesIcon />
              </InputGroupAddon>
            </TooltipTrigger>
            <TooltipContent>Voice Mode</TooltipContent>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
```

--------------------------------

### Basic Field with Label and Input - TypeScript React

Source: https://ui.shadcn.com/docs/components/base/label

A simple example showing how to create a form field with a label and input element using the Field and FieldLabel components. The FieldLabel's htmlFor attribute links it to the Input's id for proper accessibility.

```typescript
<Field>
  <FieldLabel htmlFor="email">Your email address</FieldLabel>
  <Input id="email" />
</Field>
```

--------------------------------

### Render an outlined Empty component (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/empty

Demonstrates how to apply a dashed border to the `Empty` component using the `className` prop for visual distinction. This example shows an empty state for cloud storage with an upload button, highlighting styling options.

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconCloud } from "@tabler/icons-react"

export function EmptyOutline() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Upload Files
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

--------------------------------

### Avatar Badge with Icon - React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/avatar

Embed an icon inside the AvatarBadge component for enhanced visual indicators. This example uses the PlusIcon from lucide-react to show an action icon on the avatar badge.

```typescript
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { PlusIcon } from "lucide-react"

export function AvatarBadgeIconExample() {
  return (
    <Avatar className="grayscale">
      <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
      <AvatarFallback>PP</AvatarFallback>
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  )
}
```

--------------------------------

### Add Toaster Component to Root Layout

Source: https://ui.shadcn.com/docs/components/radix/sonner

Integrates the Toaster component into the application's root layout file. This setup is required for toast notifications to display properly throughout the application.

```tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

--------------------------------

### Select with Alignment Toggle - TypeScript/React

Source: https://ui.shadcn.com/docs/components/radix/select

Advanced example demonstrating dynamic alignment control using the position prop on SelectContent. Includes a Switch component to toggle between 'item-aligned' and 'popper' positioning modes, showing how selected items can align with the trigger or the popup edge.

```typescript
"use client"

import * as React from "react"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function SelectAlignItem() {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = React.useState(true)

  return (
    <FieldGroup className="w-full max-w-xs">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="align-item">Align Item</FieldLabel>
          <FieldDescription>
            Toggle to align the item with the trigger.
          </FieldDescription>
        </FieldContent>
        <Switch
          id="align-item"
          checked={alignItemWithTrigger}
          onCheckedChange={setAlignItemWithTrigger}
        />
      </Field>
      <Field>
        <Select defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            position={alignItemWithTrigger ? "item-aligned" : "popper"}
          >
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  )
}
```

--------------------------------

### Add custom brand color to shadcn/ui style

Source: https://ui.shadcn.com/docs/registry/examples

Extend the default shadcn/ui style by adding a custom `brand` color variable with OKLCH values for both light and dark modes. This approach maintains shadcn/ui defaults while introducing brand-specific color customization.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "cssVars": {
    "light": {
      "brand": "oklch(0.99 0.00 0)"
    },
    "dark": {
      "brand": "oklch(0.14 0.00 286)"
    }
  }
}
```

--------------------------------

### Configure Shadcn Registries with URL Templates (JSON)

Source: https://ui.shadcn.com/docs/registry/namespace

This configuration demonstrates how to define multiple namespaced registries using simple URL template strings in the `components.json` file. Each registry maps a namespace (e.g., `@v0`, `@acme`) to a base URL where resources can be fetched. The `{name}` placeholder in the URL is automatically replaced with the requested resource name during installation.

```json
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@acme": "https://registry.acme.com/resources/{name}.json",
    "@lib": "https://lib.company.com/utilities/{name}",
    "@ai": "https://ai-resources.com/r/{name}.json"
  }
}
```

--------------------------------

### Build Next.js Form with Field Component

Source: https://ui.shadcn.com/docs/forms/next

This example demonstrates the basic structure of a form in Next.js using the `<Form />` and `<Field />` components, integrated with `useActionState` for managing form state and errors. It shows how to bind form elements, display errors, and handle disabled states to create an accessible form.

```tsx
<Form action={formAction}>
  <FieldGroup>
    <Field data-invalid={!!formState.errors?.title?.length}>
      <FieldLabel htmlFor="title">Bug Title</FieldLabel>
      <Input
        id="title"
        name="title"
        defaultValue={formState.values.title}
        disabled={pending}
        aria-invalid={!!formState.errors?.title?.length}
        placeholder="Login button not working on mobile"
        autoComplete="off"
      />
      <FieldDescription>
        Provide a concise title for your bug report.
      </FieldDescription>
      {formState.errors?.title && (
        <FieldError>{formState.errors.title[0]}</FieldError>
      )}
    </Field>
  </FieldGroup>
  <Button type="submit">Submit</Button>
</Form>
```

--------------------------------

### Popover Demo Component with Dimension Inputs

Source: https://ui.shadcn.com/docs/components/base/popover

A complete popover component example that displays a form for setting layer dimensions. It uses the Popover wrapper with PopoverTrigger and PopoverContent, containing labels and input fields for width, max-width, height, and max-height properties. Requires Button, Input, Label, and Popover components from the UI library.

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

--------------------------------

### Square Aspect Ratio Component - TypeScript React

Source: https://ui.shadcn.com/docs/components/radix/aspect-ratio

Example implementation of AspectRatio with a 1:1 (square) ratio. Useful for displaying images in square format with a maximum width constraint and styling for rounded corners and grayscale effects.

```typescript
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioSquare() {
  return (
    <div className="w-full max-w-[12rem]">
      <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
        <Image
          src="https://avatar.vercel.sh/shadcn1"
          alt="Photo"
          fill
          className="rounded-lg object-cover grayscale dark:brightness-20"
        />
      </AspectRatio>
    </div>
  )
}
```

--------------------------------

### React Context Menu Component Demo with Shadcn UI

Source: https://ui.shadcn.com/docs/components/base/context-menu

This comprehensive example showcases a fully-featured context menu using Shadcn UI components in a React application. It demonstrates nested submenus, checkbox items, radio groups, disabled items, and custom triggers for right-click or long-press interactions.

```tsx
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from "@/components/ui/context-menu"

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click here
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press here
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-44">
              <ContextMenuGroup>
                <ContextMenuItem>Save Page...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuCheckboxItem checked>
            Show Bookmarks
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>
            Show Full URLs
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

--------------------------------

### Render a basic shadcn/ui Textarea component in TSX

Source: https://ui.shadcn.com/docs/components/base/textarea

This snippet demonstrates the minimal setup to render a Textarea component. It imports the Textarea component from the UI library and uses it within a functional React component, displaying a placeholder text.

```tsx
import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}
```

--------------------------------

### Add Base Styles Layer in shadcn/ui CSS

Source: https://ui.shadcn.com/docs/registry/examples

Define global base styles using Tailwind's @layer directive to style HTML elements like headings with theme variables, ensuring consistent typography across the application.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "css": {
    "@layer base": {
      "h1": {
        "font-size": "var(--text-2xl)"
      },
      "h2": {
        "font-size": "var(--text-xl)"
      }
    }
  }
}
```

--------------------------------

### Create Vite React Project with npm

Source: https://ui.shadcn.com/docs/installation/vite

Initialize a new Vite project using npm with React and TypeScript template. This command creates a new React project with Vite as the build tool.

```bash
npm create vite@latest
```

--------------------------------

### Implement Shadcn UI Toggle with RTL Support in React

Source: https://ui.shadcn.com/docs/components/radix/toggle

Shows an example of implementing the Shadcn UI Toggle component with Right-to-Left (RTL) language support. This snippet uses `useTranslation` to dynamically set the `dir` prop and localize the label, demonstrating internationalization capabilities for global applications.

```tsx
"use client"

import * as React from "react"
import { Toggle } from "@/examples/radix/ui-rtl/toggle"
import { BookmarkIcon } from "lucide-react"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      label: "Bookmark",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      label: "إشارة مرجعية",
    },
  },
  he: {
    dir: "rtl",
    values: {
      label: "סימנייה",
    },
  },
}

export function ToggleRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline" dir={dir}>
      <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
      {t.label}
    </Toggle>
  )
}
```

--------------------------------

### Wrap Application with DirectionProvider

Source: https://ui.shadcn.com/docs/components/radix/direction

Usage example showing how to wrap your application content with the DirectionProvider component set to RTL mode. The direction prop accepts 'rtl' or 'ltr' values to control text direction for all child components.

```typescript
<html dir="rtl">
  <body>
    <DirectionProvider direction="rtl">
      {/* Your app content */}
    </DirectionProvider>
  </body>
</html>
```

--------------------------------

### Create a Textarea with label and description using shadcn/ui Field components in TSX

Source: https://ui.shadcn.com/docs/components/base/textarea

This example demonstrates how to integrate the Textarea component with Field, FieldLabel, and FieldDescription for enhanced form accessibility and structure. It provides a clear label and an informative description for the textarea input.

```tsx
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function TextareaField() {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." />
    </Field>
  )
}
```

--------------------------------

### Update radix-ui Imports in TypeScript

Source: https://ui.shadcn.com/docs/changelog/2025-06-radix-ui

Example of how imports are automatically updated during migration. The command replaces named imports from @radix-ui/react-dialog with the new radix-ui package format, using aliased imports for component primitives.

```typescript
import { AlertDialog as AlertDialogPrimitive } from "radix-ui"
```

--------------------------------

### Implement a Shadcn UI Breadcrumb with Custom Separator in TSX

Source: https://ui.shadcn.com/docs/components/base/breadcrumb

This example demonstrates how to customize the separator in a Shadcn UI Breadcrumb component. It uses a `DotIcon` from `lucide-react` as the `children` for `BreadcrumbSeparator`, providing a visual alternative to the default slash.

```tsx
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DotIcon } from "lucide-react"

export function BreadcrumbSeparatorDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link href="/components" />}>
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

--------------------------------

### Empty Component Displaying User Avatar as Media (TSX)

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This example shows how to use an `Avatar` component as the media for an empty state, suitable for displaying user-related messages like 'User Offline'. It includes `AvatarImage` and `AvatarFallback` within `EmptyMedia` to handle different avatar states.

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty"

export function EmptyAvatar() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="size-12">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="grayscale"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>User Offline</EmptyTitle>
        <EmptyDescription>
          This user is currently offline. You can leave a message to notify them
          or try again later.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Leave Message</Button>
      </EmptyContent>
    </Empty>
  )
}
```

--------------------------------

### Kbd Component Demo with Multiple Keys

Source: https://ui.shadcn.com/docs/components/base/kbd

Shows a complete demo component displaying multiple keyboard keys using both symbol notation (⌘, ⇧, ⌥, ⌃) and text notation (Ctrl, B). Uses KbdGroup to organize related keys together with flexbox layout.

```typescript
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  )
}
```

--------------------------------

### Integrate Avatar into ItemMedia Component with TypeScript/React

Source: https://ui.shadcn.com/docs/components/base/item

This example demonstrates how to display single and multiple avatars within the `Item` component using `ItemMedia`. It utilizes `Avatar`, `AvatarImage`, and `AvatarFallback` components to show user profiles or groups. The snippet also includes `ItemActions` with buttons for interactive elements, showcasing both individual and stacked avatar displays.

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Plus } from "lucide-react"

export function ItemAvatar() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-sm"
            variant="outline"
            className="rounded-full"
            aria-label="Invite"
          >
            <Plus />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar className="hidden sm:flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="hidden sm:flex">
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>
            Invite your team to collaborate on this project.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
```

--------------------------------

### Display Avatar Group in Empty State (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/base/empty

This example illustrates how to use the `EmptyMedia` component to display a group of avatars in an empty state, such as when no team members are assigned. It shows how to style multiple `Avatar` components to create an overlapping group effect, providing a visual cue for inviting members.

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { PlusIcon } from "lucide-react"

export function EmptyAvatarGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>
          Invite your team to collaborate on this project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

--------------------------------

### Hover Card with Multiple Sides Example

Source: https://ui.shadcn.com/docs/components/radix/hover-card

Demonstrates Hover Card positioning on all four sides (left, top, bottom, right) using a loop to render multiple cards. Each card shows how content appears relative to its trigger position.

```tsx
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const HOVER_CARD_SIDES = ["left", "top", "bottom", "right"] as const

export function HoverCardSides() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {HOVER_CARD_SIDES.map((side) => (
        <HoverCard key={side} openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">Hover Card</h4>
              <p>This hover card appears on the {side} side of the trigger.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
```

--------------------------------

### Create Rounded Button with shadcn UI

Source: https://ui.shadcn.com/docs/components/base/button

Demonstrates how to create fully rounded buttons using the `rounded-full` Tailwind CSS class. Includes examples of primary and icon-based buttons with rounded styling. The component imports Button from shadcn UI and uses lucide-react icons.

```tsx
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

export function ButtonRounded() {
  return (
    <div className="flex gap-2">
      <Button className="rounded-full">Get Started</Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
```

--------------------------------

### Pagination with Icons and Rows Per Page Selector - TypeScript React

Source: https://ui.shadcn.com/docs/components/radix/pagination

Advanced pagination example combining previous/next icon buttons with a rows-per-page dropdown selector. Ideal for data tables where users need to control both page navigation and items displayed per page.

```typescript
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PaginationIconsOnly() {
  return (
    <div className="flex items-center justify-between gap-4">
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
        <Select defaultValue="25">
          <SelectTrigger className="w-20" id="select-rows-per-page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectGroup>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
```

--------------------------------

### Define Registry URL with Name Placeholder (JSON)

Source: https://ui.shadcn.com/docs/registry/namespace

This configuration snippet illustrates the use of the required `{name}` placeholder in a registry URL. The placeholder is dynamically replaced with the resource's name when a component is installed, allowing a single URL pattern to fetch various resources from a namespace.

```json
{
  "@acme": "https://registry.acme.com/{name}.json"
}
```

--------------------------------

### Control Avatar Sizes (Shadcn UI, TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/avatar

This example demonstrates how to adjust the size of individual `Avatar` components using the `size` prop. It showcases 'sm' (small), default, and 'lg' (large) sizes within a flex container, allowing for visual differentiation of avatars based on context. This provides flexibility in UI design for various avatar display needs.

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarSizeExample() {
  return (
    <div className="flex flex-wrap items-center gap-2 grayscale">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

--------------------------------

### Select with Align Item Toggle

Source: https://ui.shadcn.com/docs/components/base/select

Advanced Select component example with dynamic alignment control. Uses React state to toggle the alignItemWithTrigger property, allowing the selected item to align with or offset from the trigger button.

```tsx
"use client"

import * as React from "react"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
]

export function SelectAlignItem() {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = React.useState(true)

  return (
    <FieldGroup className="w-full max-w-xs">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="align-item">Align Item</FieldLabel>
          <FieldDescription>
            Toggle to align the item with the trigger.
          </FieldDescription>
        </FieldContent>
        <Switch
          id="align-item"
          checked={alignItemWithTrigger}
          onCheckedChange={setAlignItemWithTrigger}
        />
      </Field>
      <Field>
        <Select items={items} defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={alignItemWithTrigger}>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  )
}
```

--------------------------------

### Import and Basic Button Usage in React/TypeScript

Source: https://ui.shadcn.com/docs/components/radix/button

Demonstrates how to import the Button component from the UI library and render a basic button with outline variant. This is the foundational pattern for all button implementations in the project.

```typescript
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
```

--------------------------------

### Define Registry Dependencies Across Multiple Registries

Source: https://ui.shadcn.com/docs/changelog/2025-08-cli-3-mcp

Specify component dependencies from different registries in a registry item configuration. The system automatically resolves and installs resources from the correct sources, supporting components, utilities, and AI prompts.

```json
{
  "name": "dashboard",
  "type": "registry:block",
  "registryDependencies": [
    "@shadcn/card",
    "@v0/chart",
    "@acme/data-table",
    "@lib/data-fetcher",
    "@ai/analytics-prompt"
  ]
}
```

--------------------------------

### Create Rounded Button with Tailwind CSS

Source: https://ui.shadcn.com/docs/components/radix/button

Apply the `rounded-full` Tailwind class to a Button component to create a fully rounded button. This example uses an outline variant with an icon size and includes the ArrowUpIcon from lucide-react.

```tsx
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

export function ButtonRounded() {
  return (
    <div className="flex flex-col gap-8">
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
```

--------------------------------

### Data Table Setup with TanStack Table and shadcn/ui

Source: https://ui.shadcn.com/docs/components/base/data-table

Creates a fully-featured data table component using TanStack Table v8 with shadcn/ui components. Includes payment data structure, column definitions with sorting, filtering, selection, and action menus. Supports row selection via checkboxes, column sorting with visual indicators, email filtering, currency formatting, and dropdown actions for each row.

```typescript
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
]
```

--------------------------------

### Basic Select Component Demo

Source: https://ui.shadcn.com/docs/components/base/select

Demonstrates a basic Select component with a list of fruit options. Uses SelectGroup for organizing items and maps through an array of items to render SelectItem components.

```tsx
const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
]

export function SelectDemo() {
  return (
    <Select items={items}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
```

--------------------------------

### Configure Sheet Side Position with TSX

Source: https://ui.shadcn.com/docs/components/base/sheet

Demonstrates how to use the side prop on SheetContent to position the sheet at different edges of the screen (top, right, bottom, left). The example renders buttons for each side option and includes responsive max-height styling for top and bottom positioned sheets.

```tsx
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

export function SheetSide() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger
            render={<Button variant="outline" className="capitalize" />}
          >
            {side}
          </SheetTrigger>
          <SheetContent
            side={side}
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
          >
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="no-scrollbar overflow-y-auto px-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose render={<Button variant="outline" />}>
                Cancel
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
```

--------------------------------

### Render Basic Checkbox with Field and Label in React (Shadcn UI)

Source: https://ui.shadcn.com/docs/components/base/checkbox

Provides a simple example of pairing the `Checkbox` component with `Field` and `FieldLabel` for proper layout and accessibility. This snippet demonstrates a common pattern for displaying a single checkbox with its associated label.

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function CheckboxBasic() {
  return (
    <FieldGroup className="mx-auto w-56">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
```

--------------------------------

### Override Tailwind CSS Variables in shadcn/ui Theme

Source: https://ui.shadcn.com/docs/registry/examples

Override Tailwind CSS variables including spacing and breakpoints within shadcn/ui theme configuration to customize responsive design behavior across the component library.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "spacing": "0.2rem",
      "breakpoint-sm": "640px",
      "breakpoint-md": "768px",
      "breakpoint-lg": "1024px",
      "breakpoint-xl": "1280px",
      "breakpoint-2xl": "1536px"
    }
  }
}
```

--------------------------------

### Declare npm package dependencies for registry item

Source: https://ui.shadcn.com/docs/registry/registry-item-json

The `dependencies` property lists external npm packages that the registry item relies on for its functionality. It supports specifying exact versions using the `@version` syntax, ensuring compatibility and proper installation.

```json
{
  "dependencies": [
    "@radix-ui/react-accordion",
    "zod",
    "lucide-react",
    "name@1.0.2"
  ]
}
```

--------------------------------

### Render an Empty component with background styling (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/empty

Illustrates how to add a background color to the `Empty` component using Tailwind CSS utility classes like `bg-muted/30`. This example displays an empty state for notifications with a refresh button, showcasing custom background styling.

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconBell } from "@tabler/icons-react"
import { RefreshCcwIcon } from "lucide-react"

export function EmptyMuted() {
  return (
    <Empty className="bg-muted/30 h-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconBell />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          You&apos;re all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">
          <RefreshCcwIcon data-icon="inline-start" />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

--------------------------------

### Create a Multiple Selection Combobox with Chips in Shadcn UI (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/base/combobox

This example illustrates how to build a combobox that allows users to select multiple items, displaying the selected choices as interactive chips. It leverages the `multiple` prop on the `Combobox` component, along with `ComboboxChips`, `ComboboxChip`, `ComboboxChipsInput`, and `useComboboxAnchor` for managing and visualizing multiple selections. The `defaultValue` prop can be used to pre-select items.

```tsx
"use client"

import * as React from "react"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

export function ComboboxMultiple() {
  const anchor = useComboboxAnchor()

  return (
    <Combobox
      multiple
      autoHighlight
      items={frameworks}
      defaultValue={[frameworks[0]]}
    >
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {values.map((value: string) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
```

--------------------------------

### Carousel Item Sizing - Responsive

Source: https://ui.shadcn.com/docs/components/radix/carousel

Example demonstrating responsive item sizing using Tailwind breakpoints. Items display at 50% width on medium screens (md) and 33% width on large screens (lg), enabling adaptive layouts.

```typescript
// 50% on small screens and 33% on larger screens.
<Carousel>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  </CarouselContent>
</Carousel>
```

--------------------------------

### Refactor CSS Variables for @theme inline and HSL Wrappers

Source: https://ui.shadcn.com/docs/tailwind-v4

This CSS example refactors variable definitions for improved usability. It moves `hsl` wrappers to `:root` and `.dark` selectors and utilizes `@theme inline` to simplify variable access by directly referencing `--background` and `--foreground`.

```css
:root {
  --background: hsl(0 0% 100%); // <-- Wrap in hsl
  --foreground: hsl(0 0% 3.9%);
}

.dark {
  --background: hsl(0 0% 3.9%); // <-- Wrap in hsl
  --foreground: hsl(0 0% 98%);
}

@theme inline {
  --color-background: var(--background); // <-- Remove hsl
  --color-foreground: var(--foreground);
}
```

--------------------------------

### Collapsible with Card and Chevron Icon - TypeScript/React

Source: https://ui.shadcn.com/docs/components/radix/collapsible

Advanced collapsible example wrapped in a Card component with animated ChevronDownIcon that rotates on state change. Demonstrates styling with Tailwind CSS data attributes and icon animation patterns.

```typescript
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { ChevronDownIcon } from "@/registry/icons/__lucide__"

export function CollapsibleBasic() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible className="data-[state=open]:bg-muted rounded-md">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="group w-full">
              Product details
              <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>
              This panel can be expanded or collapsed to reveal additional
              content.
            </div>
            <Button size="xs">Learn More</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
```

--------------------------------

### Create a dynamic Accordion with mapped items in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/accordion

Demonstrates how to render an Accordion component dynamically by mapping over an array of data. This example populates multiple Accordion items with distinct triggers and content, setting a default open item for initial display and improved user experience.

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "How do I reset my password?",
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
  },
  {
    value: "item-2",
    trigger: "Can I change my subscription plan?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
]

export function AccordionBasic() {
  return (
    <Accordion defaultValue={["item-1"]} className="max-w-lg">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
```

--------------------------------

### Integrate Textarea with Addons in Shadcn UI InputGroup (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/base/input-group

This example showcases the use of InputGroupTextarea within a Shadcn UI InputGroup, demonstrating how to add both block-start and block-end InputGroupAddon elements. It includes functionality like displaying line/column information, a 'Run' button, and file-related actions (refresh, copy) with icons from @tabler/icons-react.

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  IconBrandJavascript,
  IconCopy,
  IconCornerDownLeft,
  IconRefresh,
} from "@tabler/icons-react"

export function InputGroupTextareaExample() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px]"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Run <IconCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <IconBrandJavascript />
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <IconRefresh />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Control Popover Horizontal Alignment with align Prop

Source: https://ui.shadcn.com/docs/components/base/popover

Demonstrates how to use the `align` prop on `PopoverContent` to position the popover at different horizontal positions: start, center, or end. Each alignment option is shown with a separate Popover component triggered by a button.

```tsx
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverAlignments() {
  return (
    <>
      <div className="flex gap-6">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            Start
          </PopoverTrigger>
          <PopoverContent align="start" className="w-40">
            Aligned to start
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            Center
          </PopoverTrigger>
          <PopoverContent align="center" className="w-40">
            Aligned to center
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="sm" />}>
            End
          </PopoverTrigger>
          <PopoverContent align="end" className="w-40">
            Aligned to end
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}
```

--------------------------------

### Configure Input Groups with Text Addons in TSX

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

This snippet demonstrates how to use `InputGroupText` within `InputGroupAddon` to display static text alongside an input field. It shows examples of currency symbols and units, providing contextual labels for numerical or URL inputs.

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function InputGroupTextExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
```

--------------------------------

### Create Basic Fieldset with Field Components in TSX

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

Demonstrates the fundamental structure of a fieldset using shadcn/ui Field components. This example shows how to organize form fields with a legend, description, and grouped input fields for address information. The component uses Tailwind CSS for responsive spacing and layout.

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldFieldset() {
  return (
    <div className="w-full max-w-md space-y-6">
      <FieldSet>
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>
          We need your address to deliver your order.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">Street Address</FieldLabel>
            <Input id="street" type="text" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" type="text" placeholder="New York" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
              <Input id="zip" type="text" placeholder="90502" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
```

--------------------------------

### Render Input OTP component with a single separator in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/input-otp

This example demonstrates how to render an Input OTP component with a single separator. It groups the 6 input slots into two groups of three, enhancing readability for users entering multi-part verification codes.

```tsx
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

--------------------------------

### Implement Responsive Field Layouts with Shadcn UI Field Components (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/base/field

This React/TypeScript example demonstrates how to create a responsive form layout using Shadcn UI's Field components. It utilizes `FieldGroup` and `Field` with `orientation='responsive'` to automatically adjust layout based on container size, ideal for mobile-first designs. It imports various Field-related components and an Input component.

```tsx
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldResponsive() {
  return (
    <div className="w-full max-w-lg">
      <form>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <FieldDescription>
                  Provide your full name for identification
                </FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="Evil Rabbit" required />
            </Field>
            <Field orientation="responsive">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
```

--------------------------------

### Configure Drawer Opening Sides in Shadcn UI (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/base/drawer

This example illustrates how to control the opening direction of a Shadcn UI Drawer using the `direction` prop. It showcases drawers opening from the top, right, bottom, and left sides. The component dynamically renders multiple drawers, each configured with a different `direction` prop, and includes scrollable content within each for demonstration.

```tsx
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const DRAWER_SIDES = ["top", "right", "bottom", "left"] as const

export function DrawerWithSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {DRAWER_SIDES.map((side) => (
        <Drawer
          key={side}
          direction={
            side === "bottom" ? undefined : (side as "top" | "right" | "left")
          }
        >
          <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </DrawerTrigger>
          <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="no-scrollbar overflow-y-auto px-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-4 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}

```

--------------------------------

### Basic Accordion Demo - TypeScript/React

Source: https://ui.shadcn.com/docs/components/radix/accordion

Demonstrates a basic accordion component with three FAQ items. Uses single-type accordion with collapsible behavior and a default open item. Includes shipping, returns, and support questions with corresponding answers.

```typescript
export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="shipping"
      className="max-w-lg"
    >
      <AccordionItem value="shipping">
        <AccordionTrigger>What are your shipping options?</AccordionTrigger>
        <AccordionContent>
          We offer standard (5-7 days), express (2-3 days), and overnight
          shipping. Free shipping on international orders.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          Returns accepted within 30 days. Items must be unused and in original
          packaging. Refunds processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
        <AccordionContent>
          Reach us via email, live chat, or phone. We respond within 24 hours
          during business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

--------------------------------

### Build Registry with pnpm

Source: https://ui.shadcn.com/docs/blocks

Runs the build script to process block definitions and generate registry data. Execute this after updating block definitions before viewing or publishing.

```bash
pnpm registry:build
```

--------------------------------

### Use Button Component in TanStack Router Route

Source: https://ui.shadcn.com/docs/installation/tanstack-router

Import and render the shadcn/ui Button component within a TanStack Router file-based route component. Demonstrates proper module imports from @tanstack/react-router and the components directory, with TypeScript support.

```tsx
import { createFileRoute } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({ 
  component: App,
})

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

--------------------------------

### Adjust Item Component Size in TypeScript/React

Source: https://ui.shadcn.com/docs/components/base/item

This example demonstrates how to control the size of the `Item` component using the `size` prop. It showcases implementations for `default`, `sm` (small), and `xs` (extra small) sizes, affecting the overall compactness of the item. The component imports various `Item` sub-components and `InboxIcon` from `lucide-react`.

```tsx
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { InboxIcon } from "lucide-react"

export function ItemSizeDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Default Size</ItemTitle>
          <ItemDescription>
            The standard size for most use cases.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Small Size</ItemTitle>
          <ItemDescription>A compact size for dense layouts.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Extra Small Size</ItemTitle>
          <ItemDescription>The most compact size available.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
```

--------------------------------

### Implement Right-to-Left (RTL) Layout with Shadcn UI and i18n (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/button

This example illustrates how to integrate Right-to-Left (RTL) language support into a Shadcn UI application using a custom `useTranslation` hook. It defines translations for English, Arabic, and Hebrew, specifying the text direction (`ltr` or `rtl`) and demonstrates rendering UI components like `Button` with dynamically translated text and appropriate directionality.

```tsx
"use client"

import { Button } from "@/examples/base/ui-rtl/button"
import { Spinner } from "@/examples/base/ui-rtl/spinner"
import { ArrowRightIcon, PlusIcon } from "lucide-react"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      button: "Button",
      submit: "Submit",
      delete: "Delete",
      loading: "Loading",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      button: "زر",
      submit: "إرسال",
      delete: "حذف",
      loading: "جاري التحميل",
    },
  },
  he: {
    dir: "rtl",
    values: {
      button: "כפתור",
      submit: "שלח",
      delete: "מחק",
      loading: "טוען",
    },
  },
}

export function ButtonRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row" dir={dir}>
      <Button variant="outline">{t.button}</Button>
      <Button variant="destructive">{t.delete}</Button>
      <Button variant="outline">
        {t.submit} 
        <ArrowRightIcon className="rtl:rotate-180" data-icon="inline-end" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button variant="secondary" disabled>
        <Spinner data-icon="inline-start" /> {t.loading}
      </Button>
    </div>
  )
}
```

--------------------------------

### Resetting a Form to Default Values using `form.reset()` in TSX

Source: https://ui.shadcn.com/docs/forms/tanstack-form

This example illustrates how to create a button that resets a form to its initial default values using a `form.reset()` method. This is typically used with form libraries that manage form state, providing a quick way for users to clear their input.

```tsx
<Button type="button" variant="outline" onClick={() => form.reset()}>
  Reset
</Button>
```

--------------------------------

### Create a Nested Submenu in a Dropdown Menu with shadcn/ui (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/radix/dropdown-menu

This example illustrates how to build a dropdown menu with nested submenus using `DropdownMenuSub` and `DropdownMenuPortal`. It allows for organizing secondary actions within the main menu, providing a hierarchical navigation experience. It depends on `@/components/ui/button` and `@/components/ui/dropdown-menu`.

```tsx
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>More options</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Calendly</DropdownMenuItem>
                      <DropdownMenuItem>Slack</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Webhook</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Advanced...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

--------------------------------

### Create Complex Input Layouts with InputGroup (Shadcn UI, React/TypeScript)

Source: https://ui.shadcn.com/docs/components/base/button-group

This example illustrates how to build more complex input layouts using Shadcn UI's `InputGroup` components (`InputGroupAddon`, `InputGroupButton`, `InputGroupInput`) nested within a `ButtonGroup`. It includes state management for a voice-enabled input field and integrates a `Tooltip` for enhanced user feedback.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AudioLinesIcon, PlusIcon } from "lucide-react"

export function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false)

  return (
    <ButtonGroup className="[--radius:9999rem]">
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput
            placeholder={
              voiceEnabled ? "Record and send audio..." : "Send a message..."
            }
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger
                render={
                  <InputGroupButton
                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                    size="icon-xs"
                    data-active={voiceEnabled}
                    className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                    aria-pressed={voiceEnabled}
                  />
                }
              >
                <AudioLinesIcon />
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
```

--------------------------------

### Basic Plugin Usage in shadcn UI Registry

Source: https://ui.shadcn.com/docs/registry/examples

Demonstrates how to declare Tailwind CSS plugins in a shadcn UI registry item configuration. The `css` object contains plugin directives that reference Tailwind CSS packages and custom plugins. This is the foundational pattern for extending Tailwind functionality in shadcn components.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-plugin",
  "type": "registry:item",
  "css": {
    "@plugin \"@tailwindcss/typography\"": {},
    "@plugin \"foo\"": {}
  }
}
```

--------------------------------

### Implement a basic Shadcn UI Alert Dialog in TypeScript/React

Source: https://ui.shadcn.com/docs/components/radix/alert-dialog

This snippet demonstrates how to create a functional Alert Dialog using Shadcn UI components. It includes importing necessary components, defining the dialog's trigger, header with title and description, and footer with cancel and action buttons. This component serves as a complete example of a basic alert dialog.

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

--------------------------------

### Render an accessible Label with Checkbox in React

Source: https://ui.shadcn.com/docs/components/base/label

This example demonstrates how to integrate the `Label` component with a `Checkbox` from Shadcn UI to create an accessible form control. It showcases the use of the `htmlFor` prop to link the label to its associated input element, ensuring proper accessibility.

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function LabelDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  )
}
```

--------------------------------

### Build Button Group with Dropdown Menu

Source: https://ui.shadcn.com/docs/components/radix/button

Create organized button groups using the ButtonGroup component combined with DropdownMenu for complex action menus. This example demonstrates responsive button groups, dropdown triggers, menu items with icons, separators, submenus with radio options, and destructive actions.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"

export function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal")

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" size="icon" aria-label="Go Back">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="More Options">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterIcon />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={label}
                    onValueChange={setLabel}
                  >
                    <DropdownMenuRadioItem value="personal">
                      Personal
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">
                      Work
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">
                      Other
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}
```

--------------------------------

### Configure Semantic Versioning with Prerelease Support

Source: https://ui.shadcn.com/docs/registry/namespace

Implements semantic versioning ranges with optional prerelease channel control. Allows specifying version constraints like caret ranges (^2.0.0) and conditionally enabling prerelease versions.

```json
{
  "@npm-style": {
    "url": "https://registry.example.com/{name}",
    "params": {
      "semver": "^2.0.0",
      "prerelease": "${ALLOW_PRERELEASE}"
    }
  }
}
```

--------------------------------

### Badge Component Props

Source: https://ui.shadcn.com/docs/components/base/badge

The Badge component is a flexible UI element that displays badges or badge-like components. It supports multiple variants and can be customized with className prop. Full RTL support is available through the RTL configuration guide.

```APIDOC
## Badge Component

### Description
The Badge component displays a badge or a component that looks like a badge. It supports multiple visual variants and is fully customizable.

### Component Name
Badge

### Props

#### variant
- **Type**: `"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"`
- **Required**: No
- **Default**: `"default"`
- **Description**: Determines the visual style of the badge. Choose from predefined variants to match your design needs.

#### className
- **Type**: `string`
- **Required**: No
- **Default**: `-`
- **Description**: Additional CSS class names to apply custom styling to the badge component.

### Usage Example
```tsx
import { Badge } from "@/components/ui/badge"

export function BadgeExample() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  )
}
```

### RTL Support
For RTL (Right-to-Left) language support, refer to the [RTL configuration guide](/docs/rtl). The Badge component fully supports RTL layouts and can be used with languages such as Arabic and Hebrew.

### RTL Implementation Example
```tsx
import { Badge } from "@/components/ui/badge"

const translations = {
  ar: {
    dir: "rtl",
    values: {
      badge: "شارة",
      secondary: "ثانوي",
      destructive: "مدمر",
      outline: "مخطط"
    }
  }
}

export function BadgeRtl() {
  return (
    <div dir="rtl">
      <Badge>{translations.ar.values.badge}</Badge>
      <Badge variant="secondary">{translations.ar.values.secondary}</Badge>
    </div>
  )
}
```
```

--------------------------------

### Build Responsive Field Layout with Orientation Prop in TSX

Source: https://ui.shadcn.com/docs/changelog/2025-10-new-components

Shows how to create responsive form fields using the `orientation="responsive"` prop that automatically switches between vertical and horizontal layouts based on container width. Includes examples with text input, textarea, and button fields within a profile form structure.

```tsx
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function FieldResponsive() {
  return (
    <div className="w-full max-w-4xl">
      <form>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldSeparator />
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <FieldDescription>
                  Provide your full name for identification
                </FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="Evil Rabbit" required />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="lastName">Message</FieldLabel>
                <FieldDescription>
                  You can write your message here. Keep it short, preferably
                  under 100 characters.
                </FieldDescription>
              </FieldContent>
              <Textarea
                id="message"
                placeholder="Hello, world!"
                required
                className="min-h-[100px] resize-none sm:min-w-[300px]"
              />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
```

--------------------------------

### Display Field-Specific Validation Errors in React/Next.js Forms

Source: https://ui.shadcn.com/docs/forms/next

This example shows how to display server-side validation errors next to their respective form fields. It utilizes `data-invalid` and `aria-invalid` props for accessibility and conditional rendering of `FieldError` components based on `formState.errors`.

```tsx
<Field data-invalid={!!formState.errors?.email?.length}>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input
    id="email"
    name="email"
    type="email"
    aria-invalid={!!formState.errors?.email?.length}
  />
  {formState.errors?.email && (
    <FieldError>{formState.errors.email[0]}</FieldError>
  )}
</Field>
```

--------------------------------

### Carousel with Responsive Sizing using React and Embla

Source: https://ui.shadcn.com/docs/components/base/carousel

Advanced carousel example with responsive item sizing using CSS basis utility classes. Items display at different widths on small, medium, and large screens with left-aligned content alignment.

```tsx
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

--------------------------------

### Create Complex Input Layouts with Shadcn UI InputGroup and ButtonGroup (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/radix/button-group

This example illustrates building a sophisticated input layout using `InputGroup` nested within a `ButtonGroup`. It features dynamic placeholder text, a toggleable voice recording button with a tooltip, and leverages `InputGroupInput`, `InputGroupAddon`, `InputGroupButton`, `Tooltip`, and `ButtonGroup` components from Shadcn UI to create rich interactive input experiences.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AudioLinesIcon, PlusIcon } from "lucide-react"

export function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false)

  return (
    <ButtonGroup className="[--radius:9999rem]">
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput
            placeholder={
              voiceEnabled ? "Record and send audio..." : "Send a message..."
            }
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  size="icon-xs"
                  data-active={voiceEnabled}
                  className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                  aria-pressed={voiceEnabled}
                >
                  <AudioLinesIcon />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
```

--------------------------------

### Example Form Structure with Shadcn UI Fields

Source: https://ui.shadcn.com/docs/components/radix/field

Illustrates a basic form layout using Shadcn UI's Field, FieldLabel, Textarea, and Button components, demonstrating how to structure form elements with labels and action buttons within a form context.

```tsx
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Comments
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
```

--------------------------------

### Implement a comprehensive Shadcn UI DropdownMenu with nested options in React/JSX

Source: https://ui.shadcn.com/docs/components/base/dropdown-menu

This snippet provides a complete example of a Shadcn UI DropdownMenu component. It includes a radio group for theme selection (light, dark, system), standard menu items for account actions (profile, billing), nested sub-menus for settings (keyboard shortcuts, language, notifications), and checkbox items for managing push and email notifications. It also demonstrates the use of `DropdownMenuPortal` for proper layering and `DropdownMenuShortcut` for keybindings, along with various icons.

```jsx
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={theme}
                    onValueChange={setTheme}
                  >
                    <DropdownMenuRadioItem value="light">
                      <SunIcon />
                      Light
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dark">
                      <MoonIcon />
                      Dark
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="system">
                      <MonitorIcon />
                      System
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <UserIcon />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SettingsIcon />
              Settings
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <KeyboardIcon />
                    Keyboard Shortcuts
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LanguagesIcon />
                    Language
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <BellIcon />
                      Notifications
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuGroup>
                          <DropdownMenuLabel>
                            Notification Types
                          </DropdownMenuLabel>
                          <DropdownMenuCheckboxItem
                            checked={notifications.push}
                            onCheckedChange={(checked) =>
                              setNotifications({
                                ...notifications,
                                push: checked === true,
                              })
                            }
                          >
                            <BellIcon />
                            Push Notifications
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={notifications.email}
                            onCheckedChange={(checked) =>
                              setNotifications({
                                ...notifications,
                                email: checked === true,
                              })
                            }
                          >
                            <MailIcon />
                            Email Notifications
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuGroup>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <ShieldIcon />
                    Privacy & Security
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <HelpCircleIcon />
            Help & Support
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileTextIcon />
            Documentation
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            <LogOutIcon />
            Sign Out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
```

--------------------------------

### Configure Registry URLs for HTTPS Enforcement (JSON)

Source: https://ui.shadcn.com/docs/registry/namespace

This configuration snippet illustrates the importance of using HTTPS for registry URLs in `components.json`. It shows a recommended secure HTTPS URL and an example of an insecure HTTP URL to avoid, emphasizing encrypted transport and credential protection.

```json
{
  "registries": {
    "@secure": "https://registry.example.com/{name}.json",
    "@insecure": "http://registry.example.com/{name}.json"
  }
}
```

--------------------------------

### Alert with Custom Colors and Styling

Source: https://ui.shadcn.com/docs/components/base/alert

Customize alert appearance using Tailwind CSS classes for background, border, text colors, and dark mode support. This example demonstrates an amber-themed alert with responsive dark mode styling.

```tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangleIcon } from "lucide-react"

export function AlertColors() {
  return (
    <Alert className="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
      <AlertTriangleIcon />
      <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
      <AlertDescription>
        Renew now to avoid service interruption or upgrade to a paid plan to
        continue using the service.
      </AlertDescription>
    </Alert>
  )
}
```

--------------------------------

### Create Basic Dropdown Menu with Labels and Separators

Source: https://ui.shadcn.com/docs/components/base/dropdown-menu

Implements a basic dropdown menu component with grouped menu items, labels, and separators. Uses DropdownMenuGroup to organize related items and DropdownMenuSeparator to visually divide sections. Includes a disabled menu item example.

```tsx
"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuBasic() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Open
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

--------------------------------

### Specify type of registry item

Source: https://ui.shadcn.com/docs/registry/registry-item-json

The `type` property categorizes the registry item, influencing how it's handled and resolved within a project. Examples include `registry:block` for complex components, `registry:component` for simple ones, or `registry:hook` for custom hooks.

```json
{
  "type": "registry:block"
}
```

--------------------------------

### Add shadcn/ui component from registry using CLI

Source: https://ui.shadcn.com/docs/directory

This command demonstrates how to add a component from a community registry using the shadcn/ui Command Line Interface (CLI). It requires specifying the registry name and the desired component name. This allows users to easily integrate third-party components into their projects.

```bash
npx shadcn add @<registry>/<component>
```

--------------------------------

### Import Empty component and sub-components in TypeScript React

Source: https://ui.shadcn.com/docs/components/radix/empty

This import statement is essential for using the `Empty` component and its associated sub-components (like `EmptyContent`, `EmptyDescription`, `EmptyHeader`, `EmptyMedia`, and `EmptyTitle`) within your React application. Ensure the path matches your project's setup.

```tsx
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty"
```

--------------------------------

### Render an Empty component with an outline style in TypeScript React

Source: https://ui.shadcn.com/docs/components/radix/empty

This example demonstrates how to apply an outline style to the `Empty` component using Tailwind CSS classes (`border border-dashed`). It creates an empty state for 'Cloud Storage Empty' with an upload button, visually indicating a bordered container.

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from "@/components/ui/empty"
import { IconCloud } from "@tabler/icons-react"

export function EmptyOutline() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Upload Files
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

--------------------------------

### Downgrade React to Version 18 with `npm`

Source: https://ui.shadcn.com/docs/react-19

This `npm` command allows users to explicitly install `react` and `react-dom` at version 18. This can serve as a temporary solution to resolve peer dependency issues with third-party packages not yet compatible with React 19, ensuring project stability until updates are available.

```bash
npm i react@18 react-dom@18
```

--------------------------------

### Display Dropdown Menu Radio Options with Icons in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/dropdown-menu

This example shows how to enhance a dropdown menu radio group by incorporating icons alongside each radio item using Shadcn UI components and Lucide React icons. It's useful for visually distinguishing payment methods or other categorical choices, improving user experience.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Building2Icon, CreditCardIcon, WalletIcon } from "lucide-react"

export function DropdownMenuRadioIcons() {
  const [paymentMethod, setPaymentMethod] = React.useState("card")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Payment Method
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Select Payment Method</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
          >
            <DropdownMenuRadioItem value="card">
              <CreditCardIcon />
              Credit Card
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="paypal">
              <WalletIcon />
              PayPal
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bank">
              <Building2Icon />
              Bank Transfer
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

--------------------------------

### Select Component with Placeholder

Source: https://ui.shadcn.com/docs/components/base/select

Basic Select component usage with a placeholder text. Shows the minimal structure needed to render a functional select dropdown with theme options.

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

--------------------------------

### Initialize Carousel API with State Management

Source: https://ui.shadcn.com/docs/components/base/carousel

Demonstrates how to use the setApi prop to get a carousel API instance and manage carousel state including current slide and total count. The component uses React hooks to track the selected slide and listen to carousel changes.

```tsx
"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto max-w-[10rem] sm:max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="m-px">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  )
}
```

--------------------------------

### Render Shadcn UI Buttons with Icons and Text in TypeScript React

Source: https://ui.shadcn.com/docs/components/base/button

This snippet demonstrates how to render Shadcn UI buttons that combine both text and icons. It shows how to position icons at the start or end of the button text using the `data-icon` attribute for correct spacing.

```tsx
import { Button } from "@/components/ui/button"
import { IconGitBranch, IconGitFork } from "@tabler/icons-react"

export function ButtonWithIcon() {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <IconGitBranch data-icon="inline-start" /> New Branch
      </Button>
      <Button variant="outline">
        Fork
        <IconGitFork data-icon="inline-end" />
      </Button>
    </div>
  )
}
```

--------------------------------

### Add Multiple Resources with shadcn CLI (Bash)

Source: https://ui.shadcn.com/docs/registry/namespace

This command demonstrates how to add multiple resources (`@acme/auth` and `@custom/login-form`) using the `shadcn` CLI. It highlights the dependency resolution behavior where, in case of file path conflicts, the last specified resource wins.

```bash
npx shadcn@latest add @acme/auth @custom/login-form
```

--------------------------------

### Configure shadcn Custom Registry in components.json

Source: https://ui.shadcn.com/docs/registry/mcp

This snippet demonstrates how to configure a custom shadcn registry in your project's `components.json` file. By mapping an alias (e.g., `@acme`) to your registry's URL pattern, shadcn tools can resolve components from your custom source. This setup is a prerequisite for using the MCP server with your custom registry.

```json
{
  "registries": {
    "@acme": "https://acme.com/r/{name}.json"
  }
}
```

--------------------------------

### Create Alert Dialog with Media Element in React

Source: https://ui.shadcn.com/docs/components/base/alert-dialog

Implements an alert dialog with a media element (icon) using the AlertDialogMedia component. This example displays a project sharing confirmation dialog with a CircleFadingPlusIcon from lucide-react. The dialog includes header with media, title, description, and footer with action buttons.

```typescript
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { CircleFadingPlusIcon } from "lucide-react"

export function AlertDialogWithMedia() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">Share Project</Button>}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <CircleFadingPlusIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Share this project?</AlertDialogTitle>
          <AlertDialogDescription>
            Anyone with the link will be able to view and edit this project.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Share</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

--------------------------------

### Create Theme Provider Context in React

Source: https://ui.shadcn.com/docs/dark-mode/vite

Creates a React context-based theme provider that manages dark/light/system theme states with localStorage persistence. The ThemeProvider wraps the application and provides a useTheme hook for accessing and updating the theme. It handles system preference detection using matchMedia and applies appropriate CSS classes to the document root.

```typescript
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
```

--------------------------------

### Full source code for the customizable Spinner component (TypeScript/TSX)

Source: https://ui.shadcn.com/docs/components/radix/spinner

This snippet provides the complete source code for the `Spinner` component, as defined in `components/ui/spinner.tsx`. It showcases the internal implementation, including the use of `LoaderIcon` from `lucide-react` and utility functions for styling, which is useful for manual installation or advanced customization.

```tsx
import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
```

--------------------------------

### Implement Auto-Highlighting in Shadcn UI Combobox (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/combobox

This snippet demonstrates how to enable automatic highlighting of the first item in a Shadcn UI Combobox component when filtering. It utilizes the `autoHighlight` prop on the `Combobox` component. The example showcases a simple list of frameworks for selection.

```tsx
"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

export function ComboboxAutoHighlight() {
  return (
    <Combobox items={frameworks} autoHighlight>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
```

--------------------------------

### Integrate Icons into ContextMenu Items in Shadcn UI (TSX)

Source: https://ui.shadcn.com/docs/components/base/context-menu

This example illustrates how to enhance ContextMenuItem components in Shadcn UI by adding icons. It uses icons from 'lucide-react' (e.g., CopyIcon, ScissorsIcon) alongside text labels within menu items, improving visual clarity and quick scanning for users. This pattern is useful for common actions like copy, cut, paste, and delete.

```tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  ClipboardPasteIcon,
  CopyIcon,
  ScissorsIcon,
  TrashIcon,
} from "lucide-react"

export function ContextMenuIcons() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click here
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press here
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>
            <CopyIcon />
            Copy
          </ContextMenuItem>
          <ContextMenuItem>
            <ScissorsIcon />
            Cut
          </ContextMenuItem>
          <ContextMenuItem>
            <ClipboardPasteIcon />
            Paste
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <TrashIcon />
            Delete
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

--------------------------------

### Migrate Shadcn UI Components in Custom Directory to Unified Radix UI Package

Source: https://ui.shadcn.com/docs/changelog/2026-02-radix-ui

This command extends the migration utility to update `shadcn/ui` components located in custom directories outside the default `ui` folder. By specifying a `path` argument, users can ensure all relevant components, regardless of their location, are updated to use the unified `radix-ui` package.

```bash
npx shadcn@latest migrate radix src/components/custom
```

--------------------------------

### Display Empty State Content with Button in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/empty

This snippet illustrates the `EmptyContent` component, used to house interactive elements like buttons, inputs, or links within the empty state. It guides user actions by providing clear next steps or options.

```tsx
<EmptyContent>
  <Button>Add Project</Button>
</EmptyContent>
```

--------------------------------

### Integrating Spinner into a Button for Loading States (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/spinner

Shows how to embed a `Spinner` component within a `Button` to indicate a loading or processing state. It demonstrates using `data-icon` props for positioning the spinner at the start or end of the button and disabling the button during the loading phase.

```tsx
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Processing
      </Button>
    </div>
  )
}
```

--------------------------------

### Basic Item Component Usage - TypeScript React

Source: https://ui.shadcn.com/docs/components/radix/item

Demonstrates how to import and use the Item component with its sub-components (ItemContent, ItemTitle, ItemDescription, ItemActions). Shows a basic item with title, description, and an action button, plus a verified profile item with media and chevron icon.

```typescript
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

export function ItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}
```

--------------------------------

### Format Currency Cell with Right Alignment

Source: https://ui.shadcn.com/docs/components/data-table

Formats the amount column to display as USD currency using Intl.NumberFormat API and right-aligns the content. This pattern can be applied to other cells and headers for consistent formatting across the table.

```typescript
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
```

--------------------------------

### Render Input OTP component with digits-only pattern validation in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/input-otp

This comprehensive example demonstrates how to create an Input OTP component that strictly accepts only digits using the `REGEXP_ONLY_DIGITS` pattern. It includes a `Field` and `FieldLabel` for enhanced accessibility and proper form integration.

```tsx
"use client"

import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS } from "input-otp"

export function InputOTPPattern() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="digits-only">Digits Only</FieldLabel>
      <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}
```

--------------------------------

### Implement Radio Group with TanStack Form and Shadcn UI in React

Source: https://ui.shadcn.com/docs/forms/tanstack-form

This code snippet showcases a complete implementation of a subscription plan selection using a radio group. It leverages `@tanstack/react-form` for form state management, validation with `zod`, and Shadcn UI components for a consistent look and feel. The example demonstrates how to bind `RadioGroup` to form fields, handle value changes, display validation errors, and submit form data.

```tsx
/* eslint-disable react/no-children-prop */
"use client"

import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

const plans = [
  {
    id: "starter",
    title: "Starter (100K tokens/month)",
    description: "For everyday use with basic features.",
  },
  {
    id: "pro",
    title: "Pro (1M tokens/month)",
    description: "For advanced AI usage with more features.",
  },
  {
    id: "enterprise",
    title: "Enterprise (Unlimited tokens)",
    description: "For large teams and heavy usage.",
  },
] as const

const formSchema = z.object({
  plan: z.string().min(1, "You must select a subscription plan to continue."),
})

export function FormTanstackRadioGroup() {
  const form = useForm({
    defaultValues: {
      plan: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      })
    },
  })

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Subscription Plan</CardTitle>
        <CardDescription>
          See pricing and features for each plan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-tanstack-radiogroup"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="plan"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <FieldSet>
                    <FieldLegend>Plan</FieldLegend>
                    <FieldDescription>
                      You can upgrade or downgrade your plan at any time.
                    </FieldDescription>
                    <RadioGroup
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      {plans.map((plan) => (
                        <FieldLabel
                          key={plan.id}
                          htmlFor={`form-tanstack-radiogroup-${plan.id}`}
                        >
                          <Field
                            orientation="horizontal"
                            data-invalid={isInvalid}
                          >
                            <FieldContent>
                              <FieldTitle>{plan.title}</FieldTitle>
                              <FieldDescription>
                                {plan.description}
                              </FieldDescription>
                            </FieldContent>
                            <RadioGroupItem
                              value={plan.id}
                              id={`form-tanstack-radiogroup-${plan.id}`}
                              aria-invalid={isInvalid}
                            />
                          </Field>
                        </FieldLabel>
                      ))}
                    </RadioGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldSet>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-tanstack-radiogroup">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

--------------------------------

### Create an Input with Field label and description (TypeScript/TSX)

Source: https://ui.shadcn.com/docs/components/base/input

Demonstrates how to use `Field`, `FieldLabel`, and `FieldDescription` to create a well-structured input element with a label and a descriptive helper text. This pattern enhances accessibility and user guidance for form inputs.

```tsx
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputField() {
  return (
    <Field>
      <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="Enter your username"
      />
      <FieldDescription>
        Choose a unique username for your account.
      </FieldDescription>
    </Field>
  )
}
```

--------------------------------

### Implement Right-to-Left (RTL) Support for Switch in Shadcn/ui React

Source: https://ui.shadcn.com/docs/components/base/switch

This example illustrates how to integrate Right-to-Left (RTL) language support for the `Switch` component and its associated `Field` elements. It utilizes a `useTranslation` hook to manage language direction (`dir`) and translated text, applying the `dir` prop to relevant components for proper layout in RTL contexts like Arabic or Hebrew. This ensures the UI adapts correctly for different language orientations.

```tsx
"use client"

import * as React from "react"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/examples/base/ui-rtl/field"
import { Switch } from "@/examples/base/ui-rtl/switch"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      label: "Share across devices",
      description:
        "Focus is shared across devices, and turns off when you leave the app.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      label: "المشاركة عبر الأجهزة",
      description:
        "يتم مشاركة التركيز عبر الأجهزة، ويتم إيقاف تشغيله عند مغادرة التطبيق.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      label: "שיתוף בין מכשירים",
      description: "המיקוד משותף בין מכשירים, וכבה כשאתה עוזב את האפליקציה.",
    },
  },
}

export function SwitchRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <Field orientation="horizontal" className="max-w-sm" dir={dir}>
      <FieldContent>
        <FieldLabel htmlFor="switch-focus-mode-rtl" dir={dir}>
          {t.label}
        </FieldLabel>
        <FieldDescription dir={dir}>{t.description}</FieldDescription>
      </FieldContent>
      <Switch id="switch-focus-mode-rtl" dir={dir} />
    </Field>
  )
}
```

--------------------------------

### Enable Multiple Open Items in Shadcn UI Accordion (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/accordion

This example demonstrates how to configure the Shadcn UI Accordion component to allow multiple items to be open simultaneously. It uses the `multiple` prop on the `Accordion` component and initializes it with a default open item. The accordion content is dynamically rendered from an array of item objects.

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "notifications",
    trigger: "Notification Settings",
    content:
      "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
  },
  {
    value: "privacy",
    trigger: "Privacy & Security",
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences. You can also download your data or delete your account.",
  },
  {
    value: "billing",
    trigger: "Billing & Subscription",    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
  },
]

export function AccordionMultiple() {
  return (
    <Accordion multiple className="max-w-lg" defaultValue={["notifications"]}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
```

--------------------------------

### Migrate Shadcn UI Project to Unified Radix UI Package

Source: https://ui.shadcn.com/docs/changelog/2026-02-radix-ui

This command initiates the migration process for an existing `shadcn/ui` project to adopt the new unified `radix-ui` package. It automatically updates import statements within UI components and adds `radix-ui` to the project's dependencies, streamlining the update.

```bash
npx shadcn@latest migrate radix
```

--------------------------------

### CLI Prompt for Opting Out of TypeScript

Source: https://ui.shadcn.com/docs/changelog/2023-07-javascript

This snippet illustrates the command-line interface prompt encountered when initializing a shadcn/ui project, specifically showing the user's choice to opt out of TypeScript. This is relevant for developers who prefer to work with JavaScript.

```txt
Would you like to use TypeScript (recommended)? no
```

--------------------------------

### Render a disabled Input OTP component with a predefined value in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/input-otp

This example demonstrates how to render an Input OTP component in a disabled state. By setting the `disabled` prop to `true` and providing a `value`, the component becomes read-only, suitable for displaying pre-filled or non-editable OTPs.

```tsx
import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPDisabled() {
  return (
    <InputOTP id="disabled" maxLength={6} disabled value="123456">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
```

--------------------------------

### Tooltip with Keyboard Shortcut Display

Source: https://ui.shadcn.com/docs/components/radix/tooltip

Creates a tooltip that displays a keyboard shortcut alongside descriptive text using the Kbd component. Useful for showing keyboard commands associated with button actions.

```tsx
import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SaveIcon } from "lucide-react"

export function TooltipKeyboard() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon-sm">
          <SaveIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="pr-1.5">
        <div className="flex items-center gap-2">
          Save Changes <Kbd>S</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
```

--------------------------------

### Apply conditional styling based on SidebarMenuButton active state (TSX)

Source: https://ui.shadcn.com/docs/components/base/sidebar

This example shows how to style a `SidebarMenuAction` based on the active state of its associated `SidebarMenuButton`. It uses the `peer-data-[active=true]/menu-button:opacity-100` class to change the action's opacity when the menu button is active, providing visual feedback for user interaction.

```tsx
<SidebarMenuItem>
  <SidebarMenuButton />
  <SidebarMenuAction className="peer-data-[active=true]/menu-button:opacity-100" />
</SidebarMenuItem>
```

--------------------------------

### Create a Popup Combobox with Custom Trigger in Shadcn UI (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/combobox

This example illustrates how to create a Combobox that can be triggered by a custom component, such as a Button, using the `render` prop on `ComboboxTrigger`. It also shows how to move the `ComboboxInput` inside `ComboboxContent` for a popup-style interaction. The component displays a list of countries for selection.

```tsx
"use client"

import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox"

const countries = [
  { code: "", value: "", continent: "", label: "Select country" },
  {
    code: "ar",
    value: "argentina",
    label: "Argentina",
    continent: "South America",
  },
  { code: "au", value: "australia", label: "Australia", continent: "Oceania" },
  { code: "br", value: "brazil", label: "Brazil", continent: "South America" },
  { code: "ca", value: "canada", label: "Canada", continent: "North America" },
  { code: "cn", value: "china", label: "China", continent: "Asia" },
  {
    code: "co",
    value: "colombia",
    label: "Colombia",
    continent: "South America",
  },
  { code: "eg", value: "egypt", label: "Egypt", continent: "Africa" },
  { code: "fr", value: "france", label: "France", continent: "Europe" },
  { code: "de", value: "germany", label: "Germany", continent: "Europe" },
  { code: "it", value: "italy", label: "Italy", continent: "Europe" },
  { code: "jp", value: "japan", label: "Japan", continent: "Asia" },
  { code: "ke", value: "kenya", label: "Kenya", continent: "Africa" },
  { code: "mx", value: "mexico", label: "Mexico", continent: "North America" },
  {
    code: "nz",
    value: "new-zealand",
    label: "New Zealand",
    continent: "Oceania",
  },
  { code: "ng", value: "nigeria", label: "Nigeria", continent: "Africa" },
  {
    code: "za",
    value: "south-africa",
    label: "South Africa",
    continent: "Africa",
  },
  { code: "kr", value: "south-korea", label: "South Korea", continent: "Asia" },
  {
    code: "gb",
    value: "united-kingdom",
    label: "United Kingdom",
    continent: "Europe",
  },
  {
    code: "us",
    value: "united-states",
    label: "United States",
    continent: "North America",
  },
]

export function ComboboxPopup() {
  return (
    <>
      <Combobox items={countries} defaultValue={countries[0]}>
        <ComboboxTrigger
          render={
            <Button
              variant="outline"
              className="w-64 justify-between font-normal"
            />
          }
        >
          <ComboboxValue />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxInput showTrigger={false} placeholder="Search" />
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.code} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </>
  )
}
```

--------------------------------

### Create Next.js Project with RTL Flag

Source: https://ui.shadcn.com/docs/rtl/next

Initialize a new Next.js project using shadcn/create with RTL support enabled. This command generates a components.json configuration file with the rtl flag set to true, enabling right-to-left text direction for the entire application.

```bash
npx shadcn@latest create --template next --rtl
```

--------------------------------

### Apply locale-specific formatting to Calendar component

Source: https://ui.shadcn.com/docs/components/calendar

Use the locale prop with react-day-picker locale objects to provide locale-specific date formatting and language support. This example demonstrates importing the enUS locale and passing it to the Calendar component for proper date display.

```typescript
import { enUS } from "react-day-picker/locale"

<Calendar mode="single" selected={date} onSelect={setDate} locale={enUS} />
```

--------------------------------

### Get Current Application Direction (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/direction

This snippet demonstrates how to use the `useDirection` hook within a React component. It imports the hook and then calls it to retrieve the current text direction, which can be 'ltr' or 'rtl'. The returned direction is then displayed in the component's UI.

```tsx
import { useDirection } from "@/components/ui/direction"

function MyComponent() {
  const direction = useDirection()
  return <div>Current direction: {direction}</div>
}
```

--------------------------------

### Implement RTL Support with Internationalized Items - TypeScript React

Source: https://ui.shadcn.com/docs/components/radix/item

Demonstrates RTL (Right-to-Left) language support for Item components with translations in English, Arabic, and Hebrew. Uses a custom useTranslation hook to manage language state and direction. Includes examples of basic items with actions and verified profile items with icons.

```typescript
"use client"

import * as React from "react"
import { Button } from "@/examples/radix/ui-rtl/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/examples/radix/ui-rtl/item"
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      basicItem: "Basic Item",
      basicItemDesc: "A simple item with title and description.",
      action: "Action",
      verifiedTitle: "Your profile has been verified.",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      basicItem: "عنصر أساسي",
      basicItemDesc: "عنصر بسيط يحتوي على عنوان ووصف.",
      action: "إجراء",
      verifiedTitle: "تم التحقق من ملفك الشخصي.",
    },
  },
  he: {
    dir: "rtl",
    values: {
      basicItem: "פריט בסיסי",
      basicItemDesc: "פריט פשוט עם כותרת ותיאור.",
      action: "פעולה",
      verifiedTitle: "הפרופיל שלך אומת.",
    },
  },
}

export function ItemRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <div className="flex w-full max-w-md flex-col gap-6" dir={dir}>
      <Item variant="outline" dir={dir}>
        <ItemContent>
          <ItemTitle>{t.basicItem}</ItemTitle>
          <ItemDescription>{t.basicItemDesc}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            {t.action}
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild dir={dir}>
        <a href="#">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{t.verifiedTitle}</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}
```

--------------------------------

### Implement Date Presets with Shadcn UI Calendar (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/radix/calendar

This example demonstrates how to integrate date presets with the Shadcn UI Calendar component. It allows users to quickly select common dates like 'Today', 'Tomorrow', or 'In a week' using buttons, updating both the selected date and the calendar's displayed month accordingly.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { addDays } from "date-fns"

export function CalendarWithPresets() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 12)
  )
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )

  return (
    <Card className="mx-auto w-fit max-w-[300px]" size="sm">
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          fixedWeeks
          className="p-0 [--cell-size:--spacing(9.5)]"
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t">
        {[
          { label: "Today", value: 0 },
          { label: "Tomorrow", value: 1 },
          { label: "In 3 days", value: 3 },
          { label: "In a week", value: 7 },
          { label: "In 2 weeks", value: 14 }
        ].map((preset) => (
          <Button
            key={preset.value}
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => {
              const newDate = addDays(new Date(), preset.value)
              setDate(newDate)
              setCurrentMonth(
                new Date(newDate.getFullYear(), newDate.getMonth(), 1)
              )
            }}
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}
```

--------------------------------

### Implement InputGroup with Button Addons in Shadcn UI (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/radix/input-group

This example illustrates integrating interactive buttons as addons within `InputGroup` components, leveraging React hooks and Shadcn UI components. It includes functionality for copying text to the clipboard, displaying a popover with information, and toggling a favorite state, using `useCopyToClipboard` and `Popover` components.

```tsx
"use client"

import * as React from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import {
  IconCheck,
  IconCopy,
  IconInfoCircle,
  IconStar
} from "@tabler/icons-react"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

export function InputGroupButtonExample() {
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Copy"
            title="Copy"
            size="icon-xs"
            onClick={() => {
              copyToClipboard("https://x.com/shadcn")
            }}
          >
            {isCopied ? <IconCheck /> : <IconCopy />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton variant="secondary" size="icon-xs">
                <IconInfoCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="flex flex-col gap-1 rounded-xl text-sm"
          >
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon className="text-muted-foreground pl-1.5">
          https://
        </InputGroupAddon>
        <InputGroupInput id="input-secure-19" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
          >
            <IconStar
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Add Inline Start/End Tailwind Classes to PopoverPrimitive

Source: https://ui.shadcn.com/docs/changelog/2026-01-inline-side-styles

Updates PopoverPrimitive.Popup className to include data-[side=inline-start] and data-[side=inline-end] Tailwind classes for slide-in animations. These classes handle logical side values that adapt to text direction (LTR/RTL).

```tsx
<PopoverPrimitive.Popup
  className={cn(
    "... data-[side=bottom]:slide-in-from-top-2
    data-[side=left]:slide-in-from-right-2
    data-[side=right]:slide-in-from-left-2
    data-[side=top]:slide-in-from-bottom-2
    data-[side=inline-start]:slide-in-from-right-2
    data-[side=inline-end]:slide-in-from-left-2 ...",
    className
  )}
/>
```

--------------------------------

### Display Image with ItemMedia and Next.js Image

Source: https://ui.shadcn.com/docs/components/base/item

This code snippet demonstrates how to display an image within an Item component using ItemMedia and the Next.js Image component. It fetches image sources dynamically and renders them with specific styling. The example iterates through an array of music data to display song information alongside the album art.

```tsx
import Image from "next/image"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
]

export function ItemImage() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item
            key={song.title}
            variant="outline"
            render={<a href="#" />}
            role="listitem"
          >
            <ItemMedia variant="image">
              <Image
                src={`https://avatar.vercel.sh/${song.title}`}
                alt={song.title}
                width={32}
                height={32}
                className="object-cover grayscale"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="line-clamp-1">
                {song.title} -{" "}
                <span className="text-muted-foreground">{song.album}</span>
              </ItemTitle>
              <ItemDescription>{song.artist}</ItemDescription>
            </ItemContent>
            <ItemContent className="flex-none text-center">
              <ItemDescription>{song.duration}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}

```

--------------------------------

### Implement a Dialog with a Custom Close Button in React/TypeScript

Source: https://ui.shadcn.com/docs/components/base/dialog

This example illustrates how to create a dialog where the close functionality is handled by a custom button within the `DialogFooter`. It replaces the default close control, providing more flexibility in design and placement. The dialog also includes an input field for sharing a link.

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Share</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose render={<Button type="button" />}>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

--------------------------------

### Implement Right-to-Left (RTL) Support for Shadcn/UI Select (TSX)

Source: https://ui.shadcn.com/docs/components/radix/select

This example demonstrates how to integrate Right-to-Left (RTL) language support into a Shadcn/UI `Select` component. It uses a custom `useTranslation` hook to manage multilingual content and dynamically sets the `dir` attribute on `SelectTrigger` and `SelectContent` based on the active language. This ensures proper text direction and layout for RTL languages like Arabic and Hebrew.

```tsx
"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/examples/radix/ui-rtl/select"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      selectFruit: "Select a fruit",
      fruits: "Fruits",
      apple: "Apple",
      banana: "Banana",
      blueberry: "Blueberry",
      grapes: "Grapes",
      pineapple: "Pineapple",
      vegetables: "Vegetables",
      carrot: "Carrot",
      broccoli: "Broccoli",
      spinach: "Spinach",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      selectFruit: "اختر فاكهة",
      fruits: "الفواكه",
      apple: "تفاح",
      banana: "موز",
      blueberry: "توت أزرق",
      grapes: "عنب",
      pineapple: "أناناس",
      vegetables: "الخضروات",
      carrot: "جزر",
      broccoli: "بروكلي",
      spinach: "سبانخ",
    },
  },
  he: {
    dir: "rtl",
    values: {
      selectFruit: "בחר פרי",
      fruits: "פירות",
      apple: "תפוח",
      banana: "בננה",
      blueberry: "אוכמניה",
      grapes: "ענבים",
      pineapple: "אננס",
      vegetables: "ירקות",
      carrot: "גזר",
      broccoli: "ברוקולי",
      spinach: "תרד",
    },
  },
}

export function SelectRtl() {
  const { dir, t, language } = useTranslation(translations, "ar")
  const [selectedFruit, setSelectedFruit] = React.useState<string>("")

  const fruits = [
    { label: t.apple, value: "apple" },
    { label: t.banana, value: "banana" },
    { label: t.blueberry, value: "blueberry" },
    { label: t.grapes, value: "grapes" },
    { label: t.pineapple, value: "pineapple" },
  ]

  const vegetables = [
    { label: t.carrot, value: "carrot" },
    { label: t.broccoli, value: "broccoli" },
    { label: t.spinach, value: "spinach" },
  ]

  return (
    <Select value={selectedFruit} onValueChange={setSelectedFruit}>
      <SelectTrigger className="w-32" dir={dir}>
        <SelectValue placeholder={t.selectFruit} />
      </SelectTrigger>
      <SelectContent dir={dir} data-lang={dir === "rtl" ? language : undefined}>
        <SelectGroup>
          <SelectLabel>{t.fruits}</SelectLabel>
          {fruits.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>{t.vegetables}</SelectLabel>
          {vegetables.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
```

--------------------------------

### Badge Component with Custom Colors

Source: https://ui.shadcn.com/docs/components/base/badge

Shows how to customize badge colors using Tailwind CSS classes applied via the `className` prop. Includes examples with blue, green, sky, purple, and red color schemes with dark mode support.

```tsx
import { Badge } from "@/components/ui/badge"

export function BadgeCustomColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
        Blue
      </Badge>
      <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
        Green
      </Badge>
      <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
        Sky
      </Badge>
      <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
        Purple
      </Badge>
      <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
        Red
      </Badge>
    </div>
  )
}
```

--------------------------------

### Build Sidebar Menu with SidebarMenu Component (React/TSX)

Source: https://ui.shadcn.com/docs/components/base/sidebar

The `SidebarMenu` component is designed for constructing navigation menus within a `SidebarGroup`. It typically contains multiple `SidebarMenuItem` components, each representing a link or action. This example demonstrates dynamically rendering menu items by mapping over an array of project data.

```tsx
<SidebarMenu>
  {projects.map((project) => (
    <SidebarMenuItem key={project.name}>
      <SidebarMenuButton asChild>
        <a href={project.url}>
          <project.icon />
          <span>{project.name}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ))}
</SidebarMenu>
```

--------------------------------

### Configure `components.json` for CSS Variable Theming

Source: https://ui.shadcn.com/docs/changelog/2023-06-new-cli

This JSON configuration snippet shows how to set up `components.json` to use CSS variables for theming. By setting `tailwind.cssVariables` to `true`, the CLI will generate components that utilize CSS variables for their styling, enabling easier theme customization.

```json
{
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
```

--------------------------------

### Implement a Dialog with a form in React/TypeScript

Source: https://ui.shadcn.com/docs/components/radix/dialog

This snippet demonstrates creating a dialog with a form for editing user profiles. It uses Shadcn UI's Dialog, Button, Field, Input, and Label components, integrating form submission and dialog close functionality. This example showcases a complete interactive dialog.

```tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
```

--------------------------------

### Render various Avatar components with images, fallbacks, badges, and groups in React/TypeScript

Source: https://ui.shadcn.com/docs/components/radix/avatar

Demonstrates the usage of `Avatar`, `AvatarImage`, `AvatarFallback`, `AvatarBadge`, and `AvatarGroup` components. It showcases a basic avatar, an avatar with a badge, and an avatar group with multiple members and a count. This example is written in React with TypeScript.

```tsx
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          className="grayscale"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
      <AvatarGroup className="grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}
```

--------------------------------

### Implement ContextMenu Groups with Labels and Separators in Shadcn UI (TSX)

Source: https://ui.shadcn.com/docs/components/base/context-menu

This snippet demonstrates how to structure a ContextMenu in Shadcn UI by organizing related actions into ContextMenuGroup components. It utilizes ContextMenuLabel for group titles and ContextMenuSeparator to visually divide groups, enhancing readability and user experience. The example showcases common file and edit operations.

```tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuGroups() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
        <span className="hidden pointer-fine:inline-block">
          Right click here
        </span>
        <span className="hidden pointer-coarse:inline-block">
          Long press here
        </span>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>File</ContextMenuLabel>
          <ContextMenuItem>
            New File
            <ContextMenuShortcut>⌘N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Open File
            <ContextMenuShortcut>⌘O</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Save
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Edit</ContextMenuLabel>
          <ContextMenuItem>
            Undo
            <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Redo
            <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            Cut
            <ContextMenuShortcut>⌘X</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            Delete
            <ContextMenuShortcut>⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

--------------------------------

### Create Interactive Item Links with Render Prop in Shadcn UI (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/base/item

This example illustrates how to transform a `shadcn/ui` `Item` into an interactive link using the `render` prop. It shows two variations: a simple internal link and an external link that opens in a new tab with appropriate security attributes. The `ItemActions` component is used to include icons like `ChevronRightIcon` or `ExternalLinkIcon` for visual cues.

```tsx
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"

export function ItemLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item render={<a href="#" />}>
        <ItemContent>
          <ItemTitle>Visit our documentation</ItemTitle>
          <ItemDescription>
            Learn how to get started with our components.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Item>
      <Item
        variant="outline"
        render={<a href="#" target="_blank" rel="noopener noreferrer" />}
      >
        <ItemContent>
          <ItemTitle>External resource</ItemTitle>
          <ItemDescription>
            Opens in a new tab with security attributes.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ExternalLinkIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  )
}
```

```tsx
<Item render={<a href="/dashboard" />}>
  <ItemMedia variant="icon">
    <HomeIcon />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Dashboard</ItemTitle>
    <ItemDescription>Overview of your account and activity.</ItemDescription>
  </ItemContent>
</Item>
```

--------------------------------

### Disable Form Field and Apply Styling Based on Pending State in React/Next.js

Source: https://ui.shadcn.com/docs/forms/next

This example illustrates how to disable an individual form field and apply data attributes for styling when the form is in a pending state. It uses the `data-disabled` prop on the `<Field />` component and the `disabled` prop on the `<Input />`.

```tsx
<Field data-disabled={pending}>
  <FieldLabel htmlFor="name">Name</FieldLabel>
  <Input id="name" name="name" disabled={pending} />
</Field>
```

--------------------------------

### Update Sheet Component Prop from position to side

Source: https://ui.shadcn.com/docs/changelog/2023-06-new-cli

Migration guide showing the property name change from 'position' to 'side' in Sheet component usage. This refactoring aligns the prop naming with the internal variant system and improves API consistency.

```typescript
- <Sheet position="right" />
+ <Sheet side="right" />
```

--------------------------------

### Control Sidebar open state with React state (TSX)

Source: https://ui.shadcn.com/docs/components/base/sidebar

This example shows how to manage the `Sidebar`'s open/closed state using React's `useState` hook. The `SidebarProvider` wraps the `Sidebar` component, passing the `open` state and `onOpenChange` handler for controlled behavior, enabling external control over the sidebar's visibility.

```tsx
export function AppSidebar() {
  const [open, setOpen] = React.useState(false)

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <Sidebar />
    </SidebarProvider>
  )
}
```

--------------------------------

### Implement Radio Group with descriptions using Field component in TypeScript React

Source: https://ui.shadcn.com/docs/components/radix/radio-group

This example extends the basic Radio Group by integrating `Field` components to add descriptions to each radio item. It uses `FieldLabel` and `FieldDescription` to provide more context for each option, enhancing user understanding and accessibility.

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDescription() {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <Field orientation="horizontal">
        <RadioGroupItem value="default" id="desc-r1" />
        <FieldContent>
          <FieldLabel htmlFor="desc-r1">Default</FieldLabel>
          <FieldDescription>
            Standard spacing for most use cases.
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="comfortable" id="desc-r2" />
        <FieldContent>
          <FieldLabel htmlFor="desc-r2">Comfortable</FieldLabel>
          <FieldDescription>More space between elements.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="compact" id="desc-r3" />
        <FieldContent>
          <FieldLabel htmlFor="desc-r3">Compact</FieldLabel>
          <FieldDescription>
            Minimal spacing for dense layouts.
          </FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  )
}
```

--------------------------------

### Enable Pagination in DataTable - React TypeScript

Source: https://ui.shadcn.com/docs/components/data-table

Configures the TanStack React Table with pagination support by adding getPaginationRowModel to the useReactTable hook. This automatically paginates rows into pages of 10 items by default and provides API methods for navigating between pages.

```typescript
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  // ...
}
```

--------------------------------

### Implement Responsive Dialog/Drawer Component in React/TypeScript

Source: https://ui.shadcn.com/docs/components/radix/drawer

This code snippet demonstrates how to build a responsive modal component in React using TypeScript, leveraging Shadcn UI's Dialog and Drawer. It dynamically switches between a Dialog on desktop and a Drawer on mobile based on screen width, managed by a `useMediaQuery` hook. The component includes state management for its open/closed status and a nested form for user input.

```tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
```

--------------------------------

### Implement Right-to-Left (RTL) Support for Shadcn UI Buttons (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/radix/button

This example illustrates how to add Right-to-Left (RTL) language support to Shadcn UI buttons. It uses a custom `useTranslation` hook to manage language-specific text and direction, showcasing how to render buttons with different variants, icons, and loading states in both LTR and RTL contexts.

```tsx
"use client"

import { Button } from "@/examples/radix/ui-rtl/button"
import { Spinner } from "@/examples/radix/ui-rtl/spinner"
import { ArrowRightIcon, PlusIcon } from "lucide-react"

import {
  useTranslation,
  type Translations,
} from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      button: "Button",
      submit: "Submit",
      delete: "Delete",
      loading: "Loading",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      button: "زر",
      submit: "إرسال",
      delete: "حذف",
      loading: "جاري التحميل",
    },
  },
  he: {
    dir: "rtl",
    values: {
      button: "כפתור",
      submit: "שלח",
      delete: "מחק",
      loading: "טוען",
    },
  },
}

export function ButtonRtl() {
  const { dir, t } = useTranslation(translations, "ar")

  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row" dir={dir}>
      <Button variant="outline">{t.button}</Button>
      <Button variant="destructive">{t.delete}</Button>
      <Button variant="outline">
        {t.submit}{" "}
        <ArrowRightIcon className="rtl:rotate-180" data-icon="inline-end" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button variant="secondary" disabled>
        <Spinner data-icon="inline-start" /> {t.loading}
      </Button>
    </div>
  )
}
```