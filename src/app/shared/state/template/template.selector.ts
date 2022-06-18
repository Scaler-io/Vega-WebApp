import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TemplateDataState, TEMPLATE_STATE_NAME } from './template.reducer';

const templateState =
  createFeatureSelector<TemplateDataState>(TEMPLATE_STATE_NAME);

export const getApplicationTemplateData = createSelector(
  templateState,
  (state: TemplateDataState) => {
    return state.templateData;
  }
);
