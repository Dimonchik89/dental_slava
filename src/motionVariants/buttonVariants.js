
export const buttonVariant = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

export const buttonVariantRightToLeft = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

export const buttonVariantLeftToRight = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

export const buttonTransition = {
    type: "spring",
    ease: "easeInOut",
    duration: .7,
    delay: .7
}

export const buttonTransitionFastStart = {
    type: "spring",
    ease: "easeInOut",
    duration: .4,
    delay: .7
}

export const variantButtonTransition = {
    ease: "easeInOut",
    type: "spring",
    delay: 1.3,
    duration: .7
}