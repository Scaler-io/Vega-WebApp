import { Action } from '@ngrx/store';
import { ApplicationTemplateData } from '../../models/appTemplateData';

export const TEMPLATE_DATA_INIT = 'TEMPLATE_DATA_INIT';

export class TemplateDataInit implements Action {
  readonly type = TEMPLATE_DATA_INIT;
  constructor(public payload: ApplicationTemplateData) {}
}

export type TemplateActions = TemplateDataInit;
