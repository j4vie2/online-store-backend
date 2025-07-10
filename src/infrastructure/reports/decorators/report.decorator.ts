import { Report } from "@core/ports/reports/report.interface";
/**
 * Aplica Decorator para añadir funcionalidad a reportes base
 * Justificación: Extiende reportes sin modificar su clase original
 * Cumple con OCP (SOLID) - abierto a extensión, cerrado a modificación
 */
export abstract class ReportDecorator implements Report {
    constructor(protected report: Report) {}
  
    generate(): any {
      return this.report.generate();
    }
  
    abstract decorate(): any;
  }
  
  export class FormatDecorator extends ReportDecorator {
    decorate(): any {
      const data = super.generate();
      return {
        ...data,
        formattedAt: new Date().toISOString() // Añade formato adicional
      };
    }
  }