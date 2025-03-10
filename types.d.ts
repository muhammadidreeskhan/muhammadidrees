// This file contains type declarations for modules that don't have their own type definitions

declare module 'framer-motion' {
  import * as React from 'react'
  
  export interface AnimatePresenceProps {
    children?: React.ReactNode
    custom?: any
    initial?: boolean | "true" | "false"
    mode?: "sync" | "popLayout" | "wait"
    onExitComplete?: () => void
    exitBeforeEnter?: boolean
    presenceAffectsLayout?: boolean
  }
  
  export const AnimatePresence: React.FC<AnimatePresenceProps>
  
  export interface MotionProps {
    initial?: any
    animate?: any
    exit?: any
    variants?: any
    transition?: any
    transformTemplate?: any
    transformValues?: any
    custom?: any
    onLayoutAnimationStart?: any
    onLayoutAnimationComplete?: any
    onUpdate?: any
    className?: string
    style?: React.CSSProperties
    whileHover?: any
    whileTap?: any
    whileDrag?: any
    whileFocus?: any
    whileInView?: any
    onHoverStart?: any
    onHoverEnd?: any
    onTapStart?: any
    onTap?: any
    onTapCancel?: any
    onDragStart?: any
    onDrag?: any
    onDragEnd?: any
    layoutId?: string
    layout?: boolean | "position" | "size"
  }
  
  export type HTMLMotionProps<T extends keyof React.ReactHTML> = React.ComponentProps<T> & MotionProps
  
  export interface MotionComponentType {
    <T extends keyof React.ReactHTML>(props: HTMLMotionProps<T>): React.ReactElement
    div: React.ForwardRefExoticComponent<HTMLMotionProps<"div">>
    span: React.ForwardRefExoticComponent<HTMLMotionProps<"span">>
    button: React.ForwardRefExoticComponent<HTMLMotionProps<"button">>
    a: React.ForwardRefExoticComponent<HTMLMotionProps<"a">>
    p: React.ForwardRefExoticComponent<HTMLMotionProps<"p">>
    ul: React.ForwardRefExoticComponent<HTMLMotionProps<"ul">>
    li: React.ForwardRefExoticComponent<HTMLMotionProps<"li">>
    path: React.ForwardRefExoticComponent<HTMLMotionProps<"path"> & { pathLength?: number }>
  }
  
  export const motion: MotionComponentType
  
  export function useInView<T extends Element>(
    ref: React.RefObject<T | null>,
    options?: {
      once?: boolean
      amount?: number | "some" | "all"
      root?: React.RefObject<Element>
      margin?: string
      fallback?: boolean
    }
  ): boolean
}

declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string
    color?: string
    strokeWidth?: number | string
  }
  
  export type Icon = FC<IconProps>
  
  // Add all the icon exports from lucide-react
  export const Github: Icon
  export const Linkedin: Icon
  export const Twitter: Icon
  export const Mail: Icon
  export const Menu: Icon
  export const X: Icon
  export const ExternalLink: Icon
  export const ArrowRight: Icon
  export const ArrowUp: Icon
  export const Phone: Icon
  export const MapPin: Icon
  export const Send: Icon
  export const CheckCircle: Icon
  export const AlertCircle: Icon
  export const Code: Icon
  export const Palette: Icon
  export const Database: Icon
  export const Globe: Icon
  export const Layers: Icon
  export const Cpu: Icon
  export const CalendarIcon: Icon
  export const Brush: Icon
  export const Layout: Icon
  export const Search: Icon
  export const ShoppingBag: Icon
  export const Smartphone: Icon
  export const Zap: Icon
  export const Briefcase: Icon
  export const Download: Icon
  export const GraduationCap: Icon
  export const Award: Icon
}

// Add any other missing module declarations here 