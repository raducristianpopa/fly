import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Money } from './Money'

function random(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

interface CollardGreenProps {
    svg: ReactNode
}

const CollardGreen = ({ svg }: CollardGreenProps) => {
    // const xPositionStart = random(0, 100)
    const xPositionStart = 50
    const xPositionEnd = random(20, 80)
    const duration = random(1.5, 2.5)
    const rotation = random(-180, 180)
    const peak = random(40, 70)

    return (
        <motion.div
            initial={{
                top: '120%',
                left: `${xPositionStart}%`,
                rotate: rotation
            }}
            animate={{
                top: ['120%', `${peak}%`, '120%'],
                left: [
                    `${xPositionStart}%`,
                    `${xPositionEnd + random(-20, 20)}%`
                ],
                opacity: [1, 1, 1, 0],
                rotate: [rotation, rotation + 180, rotation + 360]
            }}
            transition={{
                duration,
                ease: 'easeInOut'
            }}
            style={{ position: 'absolute', top: 0 }}
        >
            {svg}
        </motion.div>
    )
}

interface CollardGreensProps {
    count?: number
}

export const CollardGreens = ({ count = 20 }: CollardGreensProps) => {
    const createCollardGreens = () => {
        const greens = []

        for (let i = 0; i < count; i++) {
            greens.push(<CollardGreen key={`greenie-${i}`} svg={<Money />} />)
        }

        return greens
    }

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
            {createCollardGreens()}
        </div>
    )
}
