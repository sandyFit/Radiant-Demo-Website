export const IMAGE_SCROLL_TRIGGER_EFFECT = 'IMAGE_SCROLL_TRIGGER_EFFECT';

export const reducer = (state, action) => {
    switch (action.type) {
        case IMAGE_SCROLL_TRIGGER_EFFECT:
            return { ...state, image: action.payload };
        
        default:
            return state;
    }
};