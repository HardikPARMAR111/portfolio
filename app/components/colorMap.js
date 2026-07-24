// Tailwind can only pick up class names it can see literally in the source.
// Since each project/stack item picks its accent at runtime, we look it up
// here instead of building class strings like `bg-${color}` on the fly.
export const colorMap = {
  primary: {
    text: "text-primary",
    border: "border-primary",
    bg: "bg-primary",
    tint: "bg-primary/10",
    dot: "bg-primary",
    glow: "glow-primary",
    hoverGlow: "hover-glow-primary",
  },
  secondary: {
    text: "text-secondary",
    border: "border-secondary",
    bg: "bg-secondary",
    tint: "bg-secondary/10",
    dot: "bg-secondary",
    glow: "glow-secondary",
    hoverGlow: "hover-glow-secondary",
  },
  accent: {
    text: "text-accent",
    border: "border-accent",
    bg: "bg-accent",
    tint: "bg-accent/10",
    dot: "bg-accent",
    glow: "glow-accent",
    hoverGlow: "hover-glow-accent",
  },
  highlight: {
    text: "text-highlight",
    border: "border-highlight",
    bg: "bg-highlight",
    tint: "bg-highlight/10",
    dot: "bg-highlight",
    glow: "glow-highlight",
    hoverGlow: "hover-glow-highlight",
  },
};
