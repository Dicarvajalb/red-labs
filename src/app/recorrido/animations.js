import { gsap } from 'gsap'


export const selectAmazonas = (amazonasRef, onComplete, set=false) => {
    if(set){
        return gsap.set(amazonasRef, 
            {scale:3,  transformOrigin:"150% 125%", zIndex:10, duration: 1, onComplete: onComplete}
        )
    }
    return gsap.to(amazonasRef, 
        {scale:3,  transformOrigin:"150% 125%", zIndex:10, duration: 1, onComplete: onComplete}
    )
}

export const textAnimation = (textRefs) => {
    return gsap.to(textRefs, {
        y: 0,
        stagger: 0.2,
    })
}

export const fadeInOverlay = (overlayRef) => {
    return gsap.to(overlayRef, {
        opacity: 1,
    })
}
