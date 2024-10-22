export interface ApiData {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    credentials?: 'include' | 'same-origin' | 'omit';
    body?: any;
    form?: string;
    token?: string;
    headers?: any;
}