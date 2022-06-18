import { ApplicationTemplateData } from '../../models/appTemplateData';
import { TemplateActions } from './template.action';
import * as templateActions from './template.action';

export const TEMPLATE_STATE_NAME = '[template] state';

export interface TemplateDataState {
  templateData: ApplicationTemplateData;
}

export const initState: TemplateDataState = {
  templateData: null,
};

export function templateReducer(
  state: TemplateDataState = initState,
  action: TemplateActions
): TemplateDataState {
  switch (action.type) {
    case templateActions.TEMPLATE_DATA_INIT:
      return {
        ...state,
        templateData: action.payload,
      };
    default:
      return state;
  }
}
