import { Routes } from '@angular/router';
import { StatisticComponent } from '../incomes-expenses/statistic/statistic.component';
import { IncomesExpensesComponent } from '../incomes-expenses/incomes-expenses.component';
import { DetailComponent } from '../incomes-expenses/detail/detail.component';

export const dashboardRoutes: Routes = [
  { path: '', component: StatisticComponent },
  { path: 'incomes-expenses', component: IncomesExpensesComponent },
  { path: 'detail', component: DetailComponent },
];
