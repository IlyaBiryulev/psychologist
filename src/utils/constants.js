export const textAnim = {
    hidden: {
        opacity: 0,
        y: '+100px',
    },
    visible: custom => ({
        opacity: 1,
        y: '0',
        transition: {delay: custom * 0.2, duration: 0.8}
    })
}

export const reviewsAnimLeft = {
    hidden: {
        opacity: 0,
        x: '-10px',
    },
    visible: custom => ({
        opacity: 1,
        x: '0',
        transition: {delay: custom * 0.2, duration: 0.2}
    })
}

export const reviewsAnimRight = {
    hidden: {
        opacity: 0,
        x: '+10px',
    },
    visible: custom => ({
        opacity: 1,
        x: '0',
        transition: {delay: custom * 0.2, duration: 0.2}
    })
}

export const SERVICE_ID = 'service_v21mzzg';
export const TEMPLATE_ID = 'template_z195izq';
export const USER_ID = 'rR_f1fQx1LJPQEPZY';