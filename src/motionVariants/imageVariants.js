


export const imageScale = {
    hidden: {
        opaciti: 0,
        visibility: "hidden",
        scale: .5
    },
    visible: {
        opacity: 1,
        visibility: "visible",
        scale: 1
    }
}

export const imageVariantLeftToRight = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

export const imageVariantRightToLeft = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

export const imageTransition = {
    delay: .5,
    duration: .5,
    type: "just",
    ease: "easeInOut"
}