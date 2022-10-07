export enum FetchState {
    DEFAULT = 'DEFAULT',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
  }
  
  export type ProductData = {
    attributes: {
        model: string;
        upper_material:string;
        inner_material: string;
        sole_material: string;
        color: string;
        occasion: string;
        description: string;
        short_description: string;
        character: string;
        config_erp_id: string;
        erp_fifth_department_level: string;
        origincountry: string;

    };
  };
  export type AttributesData = {
        model: string;
        upper_material:string;
        inner_material: string;
        sole_material: string;
        color: string;
        occasion: string;
        description: string;
        short_description: string;
        character: string;
        config_erp_id: string;
        erp_fifth_department_level: string;
        origincountry: string;

    
  };

