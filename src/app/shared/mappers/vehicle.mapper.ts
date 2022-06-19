import { SelectOption } from '../components/selectbox/select-box.model';
import { VegaMake, VegaModel } from '../models/vehicle';

export class VegaMakeToSelectOptions {
  public static map(data: VegaMake[] | VegaModel[]): SelectOption[] {
    const options: SelectOption[] = [];
    data?.map((i) => {
      options.push({
        name: i.name,
        value: i.id,
      });
    });

    return options;
  }
}
