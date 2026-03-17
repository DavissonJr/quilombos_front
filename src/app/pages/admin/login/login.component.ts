import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  loading = false;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      user: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    });
  }

  async onSubmit() {
    if (this.form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos inválidos',
        text: 'Preencha corretamente os dados.',
      });
      return;
    }

    this.loading = true;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const { user, senha } = this.form.value;

      if (user === 'admin2026_quilombos' && senha === 'admin') {
        await Swal.fire({
          icon: 'success',
          title: 'Login realizado!',
          text: 'Bem-vindo ao painel administrativo.',
          timer: 1500,
          showConfirmButton: false,
        });

        this.router.navigate(['/admin/dashboard']);
      } else {
        throw new Error();
      }
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Erro no login',
        text: 'Email ou senha inválidos.',
      });
    } finally {
      this.loading = false;
    }
  }
}
