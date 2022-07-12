import { Channel } from './enum';

export interface Content {
  id: number;
  customerName: string;
  sido: string;
  sgg: string;
  addressDetail: string;
  contactName: string;
  contactTelNo: string;
  contactEmail: string;
  type: string;
  status: string;
  channel?: Channel;
  createdAt: Date;
  updatedAt: Date;
  extraData?: string;
  quotation: Quotation;
}

export interface Quotation {
  id: number;
  estimateMonths: number;
  estimateStartDate: string;
  bcsQty: number;
  bcsPrice: number;
  pmsQty: number;
  tssQty: number;
  osmQty: number;
  mealPrice: number;
  totalEcsPrice: number;
  totalPrice: number;
  pilotDates: string[];
  servicePlans: ServicePlan[];
}

export interface ServicePlan {
  id: number;
  serviceTime: string;
  serviceType: string;
  price: number;
  estimateQty: number;
  mealtimeFrom: string;
  serviceDays: number[];
}
