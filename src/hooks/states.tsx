export interface APP_STATES_TYPE {
    modal_visibility: boolean,
    modal_type: MODAL_COMPONENT
}

export enum MODAL_COMPONENT{
    LOGIN, REGISTER, EMPTY
}

export const initialState: APP_STATES_TYPE = {
    modal_visibility: false,
    modal_type: MODAL_COMPONENT.EMPTY
};


