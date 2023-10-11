import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'api/paciente'; // Use a URL da sua API
  private apiUrlMedic = 'api/medico';

  constructor(private http: HttpClient) {}


  loginMedico(usuario: string, senha: string): Observable<any> {
    // Construa a URL com as credenciais como parâmetros de consulta
  const url = `${this.apiUrlMedic}?usuario=${usuario}&senha=${senha}`;

  // Faça uma chamada HTTP GET para a API de médico
  return this.http.get(url);
  }
  loginPaciente(usuario: string, senha: string): Observable<any> {
  // Construa a URL com as credenciais como parâmetros de consulta
  const url = `${this.apiUrl}?usuario=${usuario}&senha=${senha}`;

  // Faça uma chamada HTTP GET para a API de paciente
  return this.http.get(url);
  }

  addUser(usuario: string, senha: string, name: string, idade: string,   email: string): Observable<any> {
    // Crie um objeto com os dados do paciente
    const pacienteData = {
      usuario: usuario,
      senha: senha,
      name: name,
      idade: idade,
      email: email // Substitua 'outrosDados' pelos outros dados do paciente
    };

    return this.http.post(`${this.apiUrl}`, pacienteData);

  }
  addMedico(usuario: string, senha: string, name: string, idade: string,
    alergico: string, contato: string, infoadd: string,    email: string): Observable<any> {
    // Crie um objeto com os dados do paciente
    const medicoData = {
      usuario: usuario,
      senha: senha,
      name: name,
      idade: idade,
      alergico: alergico,
      contato: contato,
      infoadd: infoadd,
      email: email // Substitua 'outrosDados' pelos outros dados do paciente
    };

    return this.http.post(`${this.apiUrlMedic}`, medicoData);

  }
 /* addUser(username: string, password: string) {
    this.users.push(username);
    this.passwords.push(password);
  }*/


}
