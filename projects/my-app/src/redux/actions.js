import {INPUT_TEXT, COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE} from "./types";

export function input(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}

export function commentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: {text, id}
    }
}

export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}
