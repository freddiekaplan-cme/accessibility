# Master Thesis: Accessibility on the Web

**Author:** Freddie Kaplan, FEA22

## Contents

-   [Introduction](#introduction)
-   [Accessibility on the Web](#accessibility-on-the-web)
-   [Expected Results and Initial Acceptance Criteria](#expected-results-and-initial-acceptance-criteria)
-   [Research](#research)
-   [Tech Stack](#tech-stack)
    -   [Next.js](#nextjs)
    -   [Tailwind](#tailwind)
    -   [ESLint](#eslint)
-   [Testing](#testing)
-   [My Accessibility Checker of Choice](#my-accessibility-checker-of-choice)
-   [Building the Project Site](#building-the-project-site)
    -   [Light and Dark Mode](#light-and-dark-mode)
-   [Writing Content](#writing-content)
    -   [Writing Code Snippets](#writing-code-snippets)
-   [WCAG References](#wcag-references)
-   [Examples](#examples)
    -   [Problems Displaying Non-Accessible Examples](#problems-displaying-non-accessible-examples)
    -   [Images](#images)
-   [Contents of the Project Site](#contents-of-the-project-site)
    -   [Home](#home)
    -   [Perceivable](#perceivable)
    -   [Operable](#operable)
    -   [Understandable](#understandable)
    -   [Robust](#robust)
    -   [WCAG Criteria](#wcag-criteria)
-   [Conclusion](#conclusion)
    -   [Acceptance Criteria](#acceptance-criteria)
    -   [Potential Improvements](#potential-improvements)

## Introduction

This project explores web accessibility with a focus on Swedish webpage requirements, aiming to develop a highly compliant website using modern frameworks. Despite the unavailability of specific 2025 laws, the project addresses common web accessibility issues, maintaining a developer-centric approach with ample code examples.

## Accessibility on the Web

The project aligns with the Web Content Accessibility Guidelines (WCAG), emphasizing the principles of Perceivable, Operable, Understandable, and Robust, ensuring coverage of all aspects during example selection.

## Expected Results and Initial Acceptance Criteria

The project aims to deliver a highly accessible website, offering simplified accessibility information from a developer’s perspective. It comprises six pages, each focusing on a WCAG principle, tested externally to achieve a high acceptance rate (>90/100).

## Research

Extensive research involved exploring Swedish sources, linking to WCAG's official site. The project intended to use funka.com but prioritized WCAG principles, providing information and examples.

## Tech Stack

The tech stack includes React with Next.js, Typescript, and Tailwind for styling. Despite expectations, apart from ESLint the tools didn't help with accessibility.

### Next.js

During testing, Next.js' built-in alert box posed accessibility challenges during development, prompting consideration of alternative React frameworks.

### Tailwind

While Tailwind streamlined styling, it did not actively contribute to accessibility.

### ESLint

ESLint, [https://www.npmjs.com/package/eslint-plugin-jsx-a11y](eslint-plugin-jsx-a11y) used with axe-core/react, served as a static checker for accessibility rules but provided limited assistance during development.

## Testing

Accessibility testing involved browser-based inspections and online checkers, with WAVE being the preferred automatic testing tool for its speed, detail, and ability to show issues.

## My Accessibility Checker of Choice

WAVE, accessible at [https://wave.webaim.org](https://wave.webaim.org), emerged as the preferred tool, offering speed, meticulous reporting, and practical demonstrations of issues.

## Building the Project Site

Utilizing Next.js, the project followed a structured development process, integrating light and dark mode for improved accessibility.

### Light and Dark Mode

The project successfully implemented light and dark mode, revealing considerations for text color and background contrast.

## Writing Content

Content creation involved in-depth exploration of guidelines, resulting in detailed explanations and examples. Writing code snippets presented challenges, leading to the creation of a custom Code component.

### Writing Code Snippets

The process of visualizing code on the site prompted the creation of a Code component, simplifying code representation with attributes for color and spacing.

## WCAG References

References to WCAG principles were systematically organized, with a dedicated page summarizing all criteria and their compliance levels.

## Examples

The project features examples addressing various accessibility challenges, including those intentionally demonstrating non-accessible scenarios.

### Problems Displaying Non-Accessible Examples

Addressing non-accessible examples involved strategic content presentation, omitting CSS details in readable code snippets while ensuring the necessary accessibility in the developed examples.

### Images

Incorporated stock images from pexels.com provided visual breaks in the content, with credits to photographers and relevant links.

## Contents of the Project Site

The project site comprises six pages, each focusing on a specific WCAG principle, accompanied by examples and references.

### Home

Introduces the site, highlights global accessibility standards, and acknowledges the project's school context.

### Perceivable

Demonstrates alternative text usage, color information without reliance on color alone, and contrasts using light/dark mode.

### Operable

Addresses clickable area size criteria and navigability using keyboard-only interactions.

### Understandable

Focuses on form label provision and error suggestion practices.

### Robust

Highlights semantic HTML usage and the Name, Role, Value criterion using different form versions.

### WCAG Criteria

Summarizes all WCAG criteria used on the site, providing clarity on compliance levels (A, AA, AAA) with links to respective principle pages.

## Conclusion

The project successfully met expectations, though adjustments were made, shifting focus from Swedish laws to the four WCAG principles. Despite minor deviations, the site achieved high accessibility scores.

### Acceptance Criteria

The original acceptance criteria were fulfilled, with the site maintaining six pages, focusing on WCAG principles, and achieving a high accessibility acceptance rate.

### Potential Improvements

Opportunities for improvement include incorporating a search function and expanding the Swedish angle by adding a mobile navigation page, a Swedish language version, and information about the new Swedish law when available.
