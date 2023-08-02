export const textVariant = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

export const textVariantRightToLeft = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

export const textVariantLeftToRight = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

export const textTransitionFirst = {
    ease: "easeInOut",
    type: "spring",
    delay: 0,
    duration: .7
}

export const textTransitionSecond = {
    ease: "easeInOut",
    type: "spring",
    delay: .3,
    duration: .7
}