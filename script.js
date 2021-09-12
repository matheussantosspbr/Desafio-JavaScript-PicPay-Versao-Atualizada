function Cadastrar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var data = document.getElementById("calendario").value
    var email = document.getElementById("email").value
    var dev = document.getElementById("dev").value
    var link = document.getElementById("linkedin").value
    var username = document.getElementById("git").value 
    document.getElementById("res").innerHTML= `
    <center>
    <fieldset 
    style="background-color:white;
    border:0px;
    width:520px;
    height:530px;
    color:black;
    border-radius:20px;
    ">
        <br>
        Verifique se suas informações estão corretas !!!
        <br>
        <br>
        Nome:
        <br>
        ${nome}
        <br>
        <br>
        Idade:
        <br>
        ${idade}
        <br>
        <br>
        Data:
        <br>
        ${data}
        <br>
        <br>
        Email:
        <br>
        ${email}
        <br>
        <br>
        Desenvolvedor:
        <br>
        ${dev}
        <br>
        <br>
        <a href="${link}">Clique Aqui </a>e confirme se é esse mesmo seu Perfil !!
        <br>
        <br>
        Guithub:
        <br>
        <a href="https://github.com/${username}">${username}</a>
    </fieldset>
    </center>
    <br>
    <center>
        <a href="index2.html"> <button class="botão" id="botão" type="submit" onclick="Cadastrar()">Cadastrar</button></a>
    </center>
        `;
}