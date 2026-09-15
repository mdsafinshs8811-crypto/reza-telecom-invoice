/**
 * Invoice Types and Interfaces
 */

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  taxRate?: number;
}

export interface InvoiceCustomer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: Date;
  dueDate: Date;
  customer: InvoiceCustomer;
  items: InvoiceItem[];
  subtotal: number;
  taxRate: number;
  tax: number;
  discountRate: number;
  discount: number;
  total: number;
  notes?: string;
  status: 'draft' | 'sent' | 'paid' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  syncStatus: 'synced' | 'pending' | 'failed';
}

export interface Company {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  logo?: string;
  taxId?: string;
}

export interface Settings {
  company: Company;
  defaultTaxRate: number;
  defaultCurrency: string;
  invoicePrefix: string;
  nextInvoiceNumber: number;
}
