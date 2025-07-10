import { ReportStrategy } from "@core/ports/reports/report-strategy.interface";
import { Report } from "@core/ports/reports/report.interface";
/**
 * Aplica Strategy para cambiar algoritmos de generación de reportes
 * Justificación: Permite intercambiar estrategias en runtime
 * Cumple con SRP y OCP (SOLID) - cada estrategia tiene una sola responsabilidad
 */
export class ReportService {
    private strategy: ReportStrategy;
  
    setStrategy(strategy: ReportStrategy): void {
      this.strategy = strategy; // YAGNI - No implementamos estrategias que no necesitamos
    }
  
    generateReport(data: any): Report {
      if (!this.strategy) {
        throw new Error("No report strategy defined");
      }
      return this.strategy.generate(data);
    }
  }
