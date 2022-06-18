import {
  TemplateDataState,
  templateReducer,
  TEMPLATE_STATE_NAME,
} from '../shared/state/template/template.reducer';

export interface AppState {
  [TEMPLATE_STATE_NAME]: TemplateDataState;
}

export const appReducer = {
  [TEMPLATE_STATE_NAME]: templateReducer,
};
