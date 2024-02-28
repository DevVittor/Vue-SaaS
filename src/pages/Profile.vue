<script setup>
    import axios from 'axios';
    import {watch, ref} from 'vue';

    const userId = ref(1);
    const foto = ref("foto.webp");
    const nome = ref("Vanessa");
    const sobrenome = ref("Gomes");
    const genero = ref("Mulher");
    const descricao = ref("apenas um texto simples para colocar na descrição do perfil");
    const cache = ref(350);
    const pagamentos = ref(["Dinheiro","Pix"]);
    const pais = ref("Brasil");
    const estado = ref("São Paulo");
    const sigla = ref("SP");
    const cidade = ref("São Paulo");
    const idade = ref(18);
    const altura = ref(1.76);
    const peso = ref(75);
    const etnia = ref("Branca");
    const corpo = ref("Sarado");
    const servicos = ref(["maquiagem","patinação","ginastica","musculação"]);

    const selectedAge = ref(18);
    
    watch(selectedAge,(newAge)=>{
        console.log("Idade:",newAge);
    })

    const ageOptions = Array.from({ length: 53 }, (_, i) => 18 + i);

    async function handleData(){

        const formData = {
            userId: userId.value,
            foto: foto.value,
            nome: nome.value,
            sobrenome: sobrenome.value,
            genero:genero.value,
            descricao: descricao.value,
            cache: cache.value,
            pagamentos: pagamentos.value,
            pais:pais.value,
            estado: estado.value,
            sigla:sigla.value,
            cidade: cidade.value,
            idade: idade.value,
            altura: altura.value,
            peso: peso.value,
            etnia:etnia.value,
            corpo:corpo.value,
            servicos: servicos.value
        }

        try {
            await axios.post("http://localhost:8080/profile",formData);
            console.log(`O perfil foi criado com sucesso!`);    
        } catch (error) {
            console.log(`Não deu para criar o perfil.Error:${error}`)
        }

    }

</script>
<template>
    <main>
        <section>
            <div class="container">
                <div class="box_form">
                    <h1>Criar Perfil</h1>
                    <form @submit.prevent="handleData">
                        <div class="">
                            <input type="text" v-model="nome" id="" placeholder="Nome" >
                            <input type="text" v-model="sobrenome" id="">
                        </div>
                        <div>
                            <select v-model.number="selectedAge" id="">
                                <option v-for="item in ageOptions" :value="item" :key="item.id">{{ item }} anos</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" v-model="pais" id="" disabled>
                        </div>
                        <input type="submit" value="Criar">
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="css" scoped>

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
}
.box_form{
    padding: 20px;
    width: 700px;
    border-radius: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.box_form h1{
    font-size: 24px;
    font-weight: 600;
}
input[type="text"]{
    padding: 3px 10px;
    outline: none;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
    color: black;
    border: 1px solid #ddd;
}

</style>