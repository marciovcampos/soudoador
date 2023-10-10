import { FormGroup } from '@angular/forms';

export function markFormGroupTouched(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach((key) => {
    const control = formGroup.controls[key];
    control.markAsTouched();

    if (control instanceof FormGroup) {
      markFormGroupTouched(control);
    }
  });
}

export function resetForm(formGroup: FormGroup | null) {
  if (formGroup) {
    formGroup.reset();

    Object.keys(formGroup.controls).forEach((key) => {
      formGroup.get(key)?.setErrors(null);
    });
  }
}

export function formatDateToDDMMYYYY(date: Date): string {
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Os meses são baseados em zero, então adicionamos 1
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
