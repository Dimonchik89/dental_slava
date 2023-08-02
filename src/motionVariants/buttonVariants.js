
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
    delay: .3
}