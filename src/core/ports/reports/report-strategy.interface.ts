import { Report } from "./report.interface";
export interface ReportStrategy {
    generate(data: any): Report;
}