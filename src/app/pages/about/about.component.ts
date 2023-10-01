import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  title = 'Sobre';
  subtitle = 'O que é o Sou Doador?';
  description = `Nós, da equipe do Sistema Sou Doador, estamos comprometidos em promover e facilitar a doação de sangue, um ato de solidariedade que salva vidas. 
    Nosso sistema é uma plataforma inovadora que conecta doadores, hemocentros e hospitais de forma eficiente e segura.
    <br/><br/>
    Acreditamos que a doação de sangue é um gesto poderoso de empatia e compaixão, capaz de fazer a diferença na vida de milhares de pessoas. 
    Por meio da nossa plataforma, pretendemos incentivar mais indivíduos a se tornarem doadores regulares e a fazerem parte dessa corrente do bem. 
    <br/><br/>
    Com um processo simples e intuitivo, o Sistema Sou Doador permite que você cadastre-se como doador, encontre hemocentros próximos para fazer suas doações e acompanhe suas contribuições ao longo do tempo. 
    Além disso, você pode convidar amigos e familiares para juntarem-se a essa nobre causa, ampliando ainda mais o impacto positivo que podemos causar juntos. 
    <br/><br/>
    Nossa equipe é composta por profissionais dedicados e apaixonados por promover a doação de sangue no Brasil e além-fronteiras. 
    Estamos sempre trabalhando para aprimorar nossa plataforma, tornando-a mais acessível e eficaz para todos os usuários. 
    <br/><br/>
    Junte-se a nós e faça parte dessa jornada humanitária. Seja um doador, seja um agente de transformação, e ajude-nos a espalhar vida e esperança para aqueles que mais precisam. 
    Unidos, podemos fazer a diferença! 
    <br/><br/>
    Obrigado por fazer parte do Sistema Sou Doador!`;
}
