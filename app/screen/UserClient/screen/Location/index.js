import React from "react"
import { View , Text , Image , ScrollView , StyleSheet } from "react-native"

import InputTextDran from "../../../../components/input/inputTextDran";
import PickerDran from "../../../../components/picker/pickerDran";

import { connect } from "react-redux";
import { height, colors } from "../../../../style";
import { requestDataLocationUpdate } from "../../../../redux/actions/User/request";
import { TutooContainerPerfilEdition } from "../../../../components/container/TutooContainerPerfilEdition";
import { navigationUserClientScrenn } from "../../../../router/actions/UserClient";

class Location extends React.Component{

    constructor(props){
        super(props)
        let { data_user_location } = this.props.user.user_client
        this.state = {
            ...data_user_location,
            states : [
                {
                    label : "SP",
                    value : "sp"
                },
            ],
            citys : [
                {
                    value: 'adamantina',
                    label: 'Adamantina'
                  },
                  {
                    value: 'adolfo',
                    label: 'Adolfo'
                  },
                  {
                    value: 'aguai',
                    label: 'Aguai'
                  },
                  {
                    value: 'aguas da prata',
                    label: 'Aguas da Prata'
                  },
                  {
                    value: 'aguas de lindoia',
                    label: 'Aguas de Lindoia'
                  },
                  {
                    value: 'aguas de santa barbara',
                    label: 'Aguas de Santa Barbara'
                  },
                  {
                    value: 'aguas de sao pedro',
                    label: 'Aguas de Sao Pedro'
                  },
                  {
                    value: 'agudos',
                    label: 'Agudos'
                  },
                  {
                    value: 'alambari',
                    label: 'Alambari'
                  },
                  {
                    value: 'alfredo marcondes',
                    label: 'Alfredo Marcondes'
                  },
                  {
                    value: 'altair',
                    label: 'Altair'
                  },
                  {
                    value: 'altinopolis',
                    label: 'Altinopolis'
                  },
                  {
                    value: 'alto alegre',
                    label: 'Alto Alegre'
                  },
                  {
                    value: 'aluminio',
                    label: 'Aluminio'
                  },
                  {
                    value: 'alvares florence',
                    label: 'Alvares Florence'
                  },
                  {
                    value: 'alvares machado',
                    label: 'Alvares Machado'
                  },
                  {
                    value: 'alvaro de carvalho',
                    label: 'Alvaro de Carvalho'
                  },
                  {
                    value: 'alvinlandia',
                    label: 'Alvinlandia'
                  },
                  {
                    value: 'americana',
                    label: 'Americana'
                  },
                  {
                    value: 'americo brasiliense',
                    label: 'Americo Brasiliense'
                  },
                  {
                    value: 'americo de campos',
                    label: 'Americo de Campos'
                  },
                  {
                    value: 'amparo',
                    label: 'Amparo'
                  },
                  {
                    value: 'analandia',
                    label: 'Analandia'
                  },
                  {
                    value: 'andradina',
                    label: 'Andradina'
                  },
                  {
                    value: 'angatuba',
                    label: 'Angatuba'
                  },
                  {
                    value: 'anhembi',
                    label: 'Anhembi'
                  },
                  {
                    value: 'anhumas',
                    label: 'Anhumas'
                  },
                  {
                    value: 'aparecida do este',
                    label:'Aparecida do Oeste'
                  },
                  {
                    value: 'aparecida',
                    label: 'Aparecida'
                  },
                  {
                    value: 'apiai',
                    label: 'Apiai'
                  },
                  {
                    value: 'aracariguama',
                    label: 'Aracariguama'
                  },
                  {
                    value: 'aracatuba',
                    label: 'Aracatuba'
                  },
                  {
                    value: 'aracoiaba da serra',
                    label: 'Aracoiaba da Serra'
                  },
                  {
                    value: 'aramina',
                    label: 'Aramina'
                  },
                  {
                    value: 'arandu',
                    label: 'Arandu'
                  },
                  {
                    value: 'arapei',
                    label: 'Arapei'
                  },
                  {
                    value: 'araraquara',
                    label: 'Araraquara'
                  },
                  {
                    value: 'araras',
                    label: 'Araras'
                  },
                  {
                    value: 'arco-iris',
                    label: 'Arco-Iris'
                  },
                  {
                    value: 'arealva',
                    label: 'Arealva'
                  },
                  {
                    value: 'areias',
                    label: 'Areias'
                  },
                  {
                    value: 'areiopolis',
                    label: 'Areiopolis'
                  },
                  {
                    value: 'ariranha',
                    label: 'Ariranha'
                  },
                  {
                    value: 'artur nogueira',
                    label: 'Artur Nogueira'
                  },
                  {
                    value: 'aruja',
                    label: 'Aruja'
                  },
                  {
                    value: 'aspasia',
                    label: 'Aspasia'
                  },
                  {
                    value: 'assis',
                    label: 'Assis'
                  },
                  {
                    value: 'atibaia',
                    label: 'Atibaia'
                  },
                  {
                    value: 'auriflama',
                    label: 'Auriflama'
                  },
                  {
                    value: 'avai',
                    label: 'Avai'
                  },
                  {
                    value: 'avanhandava',
                    label: 'Avanhandava'
                  },
                  {
                    value: 'avare',
                    label: 'Avare'
                  },
                  {
                    value: 'bady bassitt',
                    label: 'Bady Bassitt'
                  },
                  {
                    value: 'balbinos',
                    label: 'Balbinos'
                  },
                  {
                    value: 'balsamo',
                    label: 'Balsamo'
                  },
                  {
                    value: 'bananal',
                    label: 'Bananal'
                  },
                  {
                    value: 'barao de antonina',
                    label: 'Barao de Antonina'
                  },
                  {
                    value: 'barbosa',
                    label: 'Barbosa'
                  },
                  {
                    value: 'bariri',
                    label: 'Bariri'
                  },
                  {
                    value: 'barra bonita',
                    label: 'Barra Bonita'
                  },
                  {
                    value: 'barra do chapeu',
                    label: 'Barra do Chapeu'
                  },
                  {
                    value: 'barra do turvo',
                    label: 'Barra do Turvo'
                  },
                  {
                    value: 'barretos',
                    label: 'Barretos'
                  },
                  {
                    value: 'barrinha',
                    label: 'Barrinha'
                  },
                  {
                    value: 'barueri',
                    label: 'Barueri'
                  },
                  {
                    value: 'bastos',
                    label: 'Bastos'
                  },
                  {
                    value: 'batatais',
                    label: 'Batatais'
                  },
                  {
                    value: 'bauru',
                    label: 'Bauru'
                  },
                  {
                    value: 'bebedouro',
                    label: 'Bebedouro'
                  },
                  {
                    value: 'bento de abreu',
                    label: 'Bento de Abreu'
                  },
                  {
                    value: 'bernardino de campos',
                    label: 'Bernardino de Campos'
                  },
                  {
                    value: 'bertioga',
                    label: 'Bertioga'
                  },
                  {
                    value: 'bilac',
                    label: 'Bilac'
                  },
                  {
                    value: 'birigui',
                    label: 'Birigui'
                  },
                  {
                    value: 'biritiba-mirim',
                    label: 'Biritiba-Mirim'
                  },
                  {
                    value: 'boa esperanca do sul',
                    label: 'Boa Esperanca do Sul'
                  },
                  {
                    value: 'bocaina',
                    label: 'Bocaina'
                  },
                  {
                    value: 'bofete',
                    label: 'Bofete'
                  },
                  {
                    value: 'boituva',
                    label: 'Boituva'
                  },
                  {
                    value: 'bom jesus dos perdoes',
                    label: 'Bom Jesus dos Perdoes'
                  },
                  {
                    value: 'bom sucesso de itarare',
                    label: 'Bom Sucesso de Itarare'
                  },
                  {
                    value: 'bora',
                    label: 'Bora'
                  },
                  {
                    value: 'boraceia',
                    label: 'Boraceia'
                  },
                  {
                    value: 'borborema',
                    label: 'Borborema'
                  },
                  {
                    value: 'borebi',
                    label: 'Borebi'
                  },
                  {
                    value: 'botucatu',
                    label: 'Botucatu'
                  },
                  {
                    value: 'braganca paulista',
                    label: 'Braganca Paulista'
                  },
                  {
                    value: 'brauna',
                    label: 'Brauna'
                  },
                  {
                    value: 'brejo alegre',
                    label: 'Brejo Alegre'
                  },
                  {
                    value: 'brodosqui',
                    label: 'Brodosqui'
                  },
                  {
                    value: 'brotas',
                    label: 'Brotas'
                  },
                  {
                    value: 'buri',
                    label: 'Buri'
                  },
                  {
                    value: 'buritama',
                    label: 'Buritama'
                  },
                  {
                    value: 'buritizal',
                    label: 'Buritizal'
                  },
                  {
                    value: 'cabralia paulista',
                    label: 'Cabralia Paulista'
                  },
                  {
                    value: 'cabreuva',
                    label: 'Cabreuva'
                  },
                  {
                    value: 'cacapava',
                    label: 'Cacapava'
                  },
                  {
                    value: 'cachoeira paulista',
                    label: 'Cachoeira Paulista'
                  },
                  {
                    value: 'caconde',
                    label: 'Caconde'
                  },
                  {
                    value: 'cafelandia',
                    label: 'Cafelandia'
                  },
                  {
                    value: 'caiabu',
                    label: 'Caiabu'
                  },
                  {
                    value: 'caieiras',
                    label: 'Caieiras'
                  },
                  {
                    value: 'caiua',
                    label: 'Caiua'
                  },
                  {
                    value: 'cajamar',
                    label: 'Cajamar'
                  },
                  {
                    value: 'cajati',
                    label: 'Cajati'
                  },
                  {
                    value: 'cajobi',
                    label: 'Cajobi'
                  },
                  {
                    value: 'cajuru',
                    label: 'Cajuru'
                  },
                  {
                    value: 'campina do monte alegre',
                    label: 'Campina do Monte Alegre'
                  },
                  {
                    value: 'campinas',
                    label: 'Campinas'
                  },
                  {
                    value: 'campo limpo paulista',
                    label: 'Campo Limpo Paulista'
                  },
                  {
                    value: 'campos novos paulista',
                    label: 'Campos Novos Paulista'
                  },
                  {
                    value: 'campos do jordao',
                    label: 'Campos do Jordao'
                  },
                  {
                    value: 'cananeia',
                    label: 'Cananeia'
                  },
                  {
                    value: 'canas',
                    label: 'Canas'
                  },
                  {
                    value: 'candido mota',
                    label: 'Candido Mota'
                  },
                  {
                    value: 'candido rodrigues',
                    label: 'Candido Rodrigues'
                  },
                  {
                    value: 'canitar',
                    label: 'Canitar'
                  },
                  {
                    value: 'capao bonito',
                    label: 'Capao Bonito'
                  },
                  {
                    value: 'capela do alto',
                    label: 'Capela do Alto'
                  },
                  {
                    value: 'capivari',
                    label: 'Capivari'
                  },
                  {
                    value: 'caraguatatuba',
                    label: 'Caraguatatuba'
                  },
                  {
                    value: 'carapicuiba',
                    label: 'Carapicuiba'
                  },
                  {
                    value: 'cardoso',
                    label: 'Cardoso'
                  },
                  {
                    value: 'casa branca',
                    label: 'Casa Branca'
                  },
                  {
                    value: 'cassia dos coqueiros',
                    label: 'Cassia dos Coqueiros'
                  },
                  {
                    value: 'castilho',
                    label: 'Castilho'
                  },
                  {
                    value: 'catanduva',
                    label: 'Catanduva'
                  },
                  {
                    value: 'catigua',
                    label: 'Catigua'
                  },
                  {
                    value: 'cedral',
                    label: 'Cedral'
                  },
                  {
                    value: 'cerqueira cesar',
                    label: 'Cerqueira Cesar'
                  },
                  {
                    value: 'cerquilho',
                    label: 'Cerquilho'
                  },
                  {
                    value: 'cesario lange',
                    label: 'Cesario Lange'
                  },
                  {
                    value: 'charqueada',
                    label: 'Charqueada'
                  },
                  {
                    value: 'chavantes',
                    label: 'Chavantes'
                  },
                  {
                    value: 'clementina',
                    label: 'Clementina'
                  },
                  {
                    value: 'colina',
                    label: 'Colina'
                  },
                  {
                    value: 'colombia',
                    label: 'Colombia'
                  },
                  {
                    value: 'conchal',
                    label: 'Conchal'
                  },
                  {
                    value: 'conchas',
                    label: 'Conchas'
                  },
                  {
                    value: 'cordeiropolis',
                    label: 'Cordeiropolis'
                  },
                  {
                    value: 'coroados',
                    label: 'Coroados'
                  },
                  {
                    value: 'coronel macedo',
                    label: 'Coronel Macedo'
                  },
                  {
                    value: 'corumbatai',
                    label: 'Corumbatai'
                  },
                  {
                    value: 'cosmopolis',
                    label: 'Cosmopolis'
                  },
                  {
                    value: 'cosmorama',
                    label: 'Cosmorama'
                  },
                  {
                    value: 'cotia',
                    label: 'Cotia'
                  },
                  {
                    value: 'cravinhos',
                    label: 'Cravinhos'
                  },
                  {
                    value: 'cristais paulista',
                    label: 'Cristais Paulista'
                  },
                  {
                    value: 'cruzalia',
                    label: 'Cruzalia'
                  },
                  {
                    value: 'cruzeiro',
                    label: 'Cruzeiro'
                  },
                  {
                    value: 'cubatao',
                    label: 'Cubatao'
                  },
                  {
                    value: 'cunha',
                    label: 'Cunha'
                  },
                  {
                    value: 'descalvado',
                    label: 'Descalvado'
                  },
                  {
                    value: 'diadema',
                    label: 'Diadema'
                  },
                  {
                    value: 'dirce reis',
                    label: 'Dirce Reis'
                  },
                  {
                    value: 'divinolandia',
                    label: 'Divinolandia'
                  },
                  {
                    value: 'dobrada',
                    label: 'Dobrada'
                  },
                  {
                    value: 'dois corregos',
                    label: 'Dois Corregos'
                  },
                  {
                    value: 'dolcinopolis',
                    label: 'Dolcinopolis'
                  },
                  {
                    value: 'dourado',
                    label: 'Dourado'
                  },
                  {
                    value: 'dracena',
                    label: 'Dracena'
                  },
                  {
                    value: 'duartina',
                    label: 'Duartina'
                  },
                  {
                    value: 'dumont',
                    label: 'Dumont'
                  },
                  {
                    value: 'echapora',
                    label: 'Echapora'
                  },
                  {
                    value: 'eldorado',
                    label: 'Eldorado'
                  },
                  {
                    value: 'elias fausto',
                    label: 'Elias Fausto'
                  },
                  {
                    value: 'elisiario',
                    label: 'Elisiario'
                  },
                  {
                    value: 'embauba',
                    label: 'Embauba'
                  },
                  {
                    value: 'embu',
                    label: 'Embu'
                  },
                  {
                    value: 'embu-guacu',
                    label: 'Embu-Guacu'
                  },
                  {
                    value: 'emilianopolis',
                    label: 'Emilianopolis'
                  },
                  {
                    value: 'engenheiro coelho',
                    label: 'Engenheiro Coelho'
                  },
                  {
                    value: 'espirito santo do pinhal',
                    label: 'Espirito Santo do Pinhal'
                  },
                  {
                    value: 'espirito santo do turvo',
                    label: 'Espirito Santo do Turvo'
                  },
                  {
                    value: 'estiva gerbi',
                    label: 'Estiva Gerbi'
                  },
                  {
                    value: 'estrela do este', 
                    label:'Estrelad Oeste'
                  },
                  {
                    value: 'estrela do norte',
                    label: 'Estrela do Norte'
                  },
                  {
                    value: 'euclides da cunha paulista',
                    label: 'Euclides da Cunha Paulista'
                  },
                  {
                    value: 'fartura',
                    label: 'Fartura'
                  },
                  {
                    value: 'fernando prestes',
                    label: 'Fernando Prestes'
                  },
                  {
                    value: 'fernandopolis',
                    label: 'Fernandopolis'
                  },
                  {
                    value: 'fernao',
                    label: 'Fernao'
                  },
                  {
                    value: 'ferraz de vasconcelos',
                    label: 'Ferraz de Vasconcelos'
                  },
                  {
                    value: 'flora rica',
                    label: 'Flora Rica'
                  },
                  {
                    value: 'floreal',
                    label: 'Floreal'
                  },
                  {
                    value: 'florida paulista',
                    label: 'Florida Paulista'
                  },
                  {
                    value: 'florinia',
                    label: 'Florinia'
                  },
                  {
                    value: 'franca',
                    label: 'Franca'
                  },
                  {
                    value: 'francisco morato',
                    label: 'Francisco Morato'
                  },
                  {
                    value: 'franco da rocha',
                    label: 'Franco da Rocha'
                  },
                  {
                    value: 'gabriel monteiro',
                    label: 'Gabriel Monteiro'
                  },
                  {
                    value: 'galia',
                    label: 'Galia'
                  },
                  {
                    value: 'garca',
                    label: 'Garca'
                  },
                  {
                    value: 'gastao vidigal',
                    label: 'Gastao Vidigal'
                  },
                  {
                    value: 'gaviao peixoto',
                    label: 'Gaviao Peixoto'
                  },
                  {
                    value: 'general salgado',
                    label: 'General Salgado'
                  },
                  {
                    value: 'getulina',
                    label: 'Getulina'
                  },
                  {
                    value: 'glicerio',
                    label: 'Glicerio'
                  },
                  {
                    value: 'guaicara',
                    label: 'Guaicara'
                  },
                  {
                    value: 'guaimbe',
                    label: 'Guaimbe'
                  },
                  {
                    value: 'guaira',
                    label: 'Guaira'
                  },
                  {
                    value: 'guapiacu',
                    label: 'Guapiacu'
                  },
                  {
                    value: 'guapiara',
                    label: 'Guapiara'
                  },
                  {
                    value: 'guara',
                    label: 'Guara'
                  },
                  {
                    value: 'guaracai',
                    label: 'Guaracai'
                  },
                  {
                    value: 'guaraci',
                    label: 'Guaraci'
                  },
                  {
                    value: 'guarani do este', 
                    label:'Guaranid O este'
                  },
                  {
                    value: 'guaranta',
                    label: 'Guaranta'
                  },
                  {
                    value: 'guararapes',
                    label: 'Guararapes'
                  },
                  {
                    value: 'guararema',
                    label: 'Guararema'
                  },
                  {
                    value: 'guaratingueta',
                    label: 'Guaratingueta'
                  },
                  {
                    value: 'guarei',
                    label: 'Guarei'
                  },
                  {
                    value: 'guariba',
                    label: 'Guariba'
                  },
                  {
                    value: 'guaruja',
                    label: 'Guaruja'
                  },
                  {
                    value: 'guarulhos',
                    label: 'Guarulhos'
                  },
                  {
                    value: 'guatapara',
                    label: 'Guatapara'
                  },
                  {
                    value: 'guzolandia',
                    label: 'Guzolandia'
                  },
                  {
                    value: 'herculandia',
                    label: 'Herculandia'
                  },
                  {
                    value: 'holambra',
                    label: 'Holambra'
                  },
                  {
                    value: 'hortolandia',
                    label: 'Hortolandia'
                  },
                  {
                    value: 'iacanga',
                    label: 'Iacanga'
                  },
                  {
                    value: 'iacri',
                    label: 'Iacri'
                  },
                  {
                    value: 'iaras',
                    label: 'Iaras'
                  },
                  {
                    value: 'ibate',
                    label: 'Ibate'
                  },
                  {
                    value: 'ibira',
                    label: 'Ibira'
                  },
                  {
                    value: 'ibirarema',
                    label: 'Ibirarema'
                  },
                  {
                    value: 'ibitinga',
                    label: 'Ibitinga'
                  },
                  {
                    value: 'ibiuna',
                    label: 'Ibiuna'
                  },
                  {
                    value: 'icem',
                    label: 'Icem'
                  },
                  {
                    value: 'iepe',
                    label: 'Iepe'
                  },
                  {
                    value: 'igaracu do tiete',
                    label: 'Igaracu do Tiete'
                  },
                  {
                    value: 'igarapava',
                    label: 'Igarapava'
                  },
                  {
                    value: 'igarata',
                    label: 'Igarata'
                  },
                  {
                    value: 'iguape',
                    label: 'Iguape'
                  },
                  {
                    value: 'ilha comprida',
                    label: 'Ilha Comprida'
                  },
                  {
                    value: 'ilha solteira',
                    label: 'Ilha Solteira'
                  },
                  {
                    value: 'ilhabela',
                    label: 'Ilhabela'
                  },
                  {
                    value: 'indaiatuba',
                    label: 'Indaiatuba'
                  },
                  {
                    value: 'indiana',
                    label: 'Indiana'
                  },
                  {
                    value: 'indiapora',
                    label: 'Indiapora'
                  },
                  {
                    value: 'inubia paulista',
                    label: 'Inubia Paulista'
                  },
                  {
                    value: 'ipaucu',
                    label: 'Ipaucu'
                  },
                  {
                    value: 'ipero',
                    label: 'Ipero'
                  },
                  {
                    value: 'ipeuna',
                    label: 'Ipeuna'
                  },
                  {
                    value: 'ipigua',
                    label: 'Ipigua'
                  },
                  {
                    value: 'iporanga',
                    label: 'Iporanga'
                  },
                  {
                    value: 'ipua',
                    label: 'Ipua'
                  },
                  {
                    value: 'iracemapolis',
                    label: 'Iracemapolis'
                  },
                  {
                    value: 'irapua',
                    label: 'Irapua'
                  },
                  {
                    value: 'irapuru',
                    label: 'Irapuru'
                  },
                  {
                    value: 'itabera',
                    label: 'Itabera'
                  },
                  {
                    value: 'itai',
                    label: 'Itai'
                  },
                  {
                    value: 'itajobi',
                    label: 'Itajobi'
                  },
                  {
                    value: 'itaju',
                    label: 'Itaju'
                  },
                  {
                    value: 'itanhaem',
                    label: 'Itanhaem'
                  },
                  {
                    value: 'itaoca',
                    label: 'Itaoca'
                  },
                  {
                    value: 'itapecerica da serra',
                    label: 'Itapecerica da Serra'
                  },
                  {
                    value: 'itapetininga',
                    label: 'Itapetininga'
                  },
                  {
                    value: 'itapeva',
                    label: 'Itapeva'
                  },
                  {
                    value: 'itapevi',
                    label: 'Itapevi'
                  },
                  {
                    value: 'itapira',
                    label: 'Itapira'
                  },
                  {
                    value: 'itapirapua paulista',
                    label: 'Itapirapua Paulista'
                  },
                  {
                    value: 'itapolis',
                    label: 'Itapolis'
                  },
                  {
                    value: 'itaporanga',
                    label: 'Itaporanga'
                  },
                  {
                    value: 'itapui',
                    label: 'Itapui'
                  },
                  {
                    value: 'itapura',
                    label: 'Itapura'
                  },
                  {
                    value: 'itaquaquecetuba',
                    label: 'Itaquaquecetuba'
                  },
                  {
                    value: 'itarare',
                    label: 'Itarare'
                  },
                  {
                    value: 'itariri',
                    label: 'Itariri'
                  },
                  {
                    value: 'itatiba',
                    label: 'Itatiba'
                  },
                  {
                    value: 'itatinga',
                    label: 'Itatinga'
                  },
                  {
                    value: 'itirapina',
                    label: 'Itirapina'
                  },
                  {
                    value: 'itirapua',
                    label: 'Itirapua'
                  },
                  {
                    value: 'itobi',
                    label: 'Itobi'
                  },
                  {
                    value: 'itu',
                    label: 'Itu'
                  },
                  {
                    value: 'itupeva',
                    label: 'Itupeva'
                  },
                  {
                    value: 'ituverava',
                    label: 'Ituverava'
                  },
                  {
                    value: 'jaborandi',
                    label: 'Jaborandi'
                  },
                  {
                    value: 'jaboticabal',
                    label: 'Jaboticabal'
                  },
                  {
                    value: 'jacarei',
                    label: 'Jacarei'
                  },
                  {
                    value: 'jaci',
                    label: 'Jaci'
                  },
                  {
                    value: 'jacupiranga',
                    label: 'Jacupiranga'
                  },
                  {
                    value: 'jaguariuna',
                    label: 'Jaguariuna'
                  },
                  {
                    value: 'jales',
                    label: 'Jales'
                  },
                  {
                    value: 'jambeiro',
                    label: 'Jambeiro'
                  },
                  {
                    value: 'jandira',
                    label: 'Jandira'
                  },
                  {
                    value: 'jardinopolis',
                    label: 'Jardinopolis'
                  },
                  {
                    value: 'jarinu',
                    label: 'Jarinu'
                  },
                  {
                    value: 'jau',
                    label: 'Jau'
                  },
                  {
                    value: 'jeriquara',
                    label: 'Jeriquara'
                  },
                  {
                    value: 'joanopolis',
                    label: 'Joanopolis'
                  },
                  {
                    value: 'joao ramalho',
                    label: 'Joao Ramalho'
                  },
                  {
                    value: 'jose bonifacio',
                    label: 'Jose Bonifacio'
                  },
                  {
                    value: 'julio mesquita',
                    label: 'Julio Mesquita'
                  },
                  {
                    value: 'jumirim',
                    label: 'Jumirim'
                  },
                  {
                    value: 'jundiai',
                    label: 'Jundiai'
                  },
                  {
                    value: 'junqueiropolis',
                    label: 'Junqueiropolis'
                  },
                  {
                    value: 'juquia',
                    label: 'Juquia'
                  },
                  {
                    value: 'juquitiba',
                    label: 'Juquitiba'
                  },
                  {
                    value: 'lagoinha',
                    label: 'Lagoinha'
                  },
                  {
                    value: 'laranjal paulista',
                    label: 'Laranjal Paulista'
                  },
                  {
                    value: 'lavinia',
                    label: 'Lavinia'
                  },
                  {
                    value: 'lavrinhas',
                    label: 'Lavrinhas'
                  },
                  {
                    value: 'leme',
                    label: 'Leme'
                  },
                  {
                    value: 'lencois paulista',
                    label: 'Lencois Paulista'
                  },
                  {
                    value: 'limeira',
                    label: 'Limeira'
                  },
                  {
                    value: 'lindoia',
                    label: 'Lindoia'
                  },
                  {
                    value: 'lins',
                    label: 'Lins'
                  },
                  {
                    value: 'lorena',
                    label: 'Lorena'
                  },
                  {
                    value: 'lourdes',
                    label: 'Lourdes'
                  },
                  {
                    value: 'louveira',
                    label: 'Louveira'
                  },
                  {
                    value: 'lucelia',
                    label: 'Lucelia'
                  },
                  {
                    value: 'lucianopolis',
                    label: 'Lucianopolis'
                  },
                  {
                    value: 'luis antonio',
                    label: 'Luis Antonio'
                  },
                  {
                    value: 'luiziania',
                    label: 'Luiziania'
                  },
                  {
                    value: 'lupercio',
                    label: 'Lupercio'
                  },
                  {
                    value: 'lutecia',
                    label: 'Lutecia'
                  },
                  {
                    value: 'macatuba',
                    label: 'Macatuba'
                  },
                  {
                    value: 'macaubal',
                    label: 'Macaubal'
                  },
                  {
                    value: 'macedonia',
                    label: 'Macedonia'
                  },
                  {
                    value: 'magda',
                    label: 'Magda'
                  },
                  {
                    value: 'mairinque',
                    label: 'Mairinque'
                  },
                  {
                    value: 'mairipora',
                    label: 'Mairipora'
                  },
                  {
                    value: 'manduri',
                    label: 'Manduri'
                  },
                  {
                    value: 'maraba paulista',
                    label: 'Maraba Paulista'
                  },
                  {
                    value: 'maracai',
                    label: 'Maracai'
                  },
                  {
                    value: 'marapoama',
                    label: 'Marapoama'
                  },
                  {
                    value: 'mariapolis',
                    label: 'Mariapolis'
                  },
                  {
                    value: 'marilia',
                    label: 'Marilia'
                  },
                  {
                    value: 'marinopolis',
                    label: 'Marinopolis'
                  },
                  {
                    value: 'martinopolis',
                    label: 'Martinopolis'
                  },
                  {
                    value: 'matao',
                    label: 'Matao'
                  },
                  {
                    value: 'maua',
                    label: 'Maua'
                  },
                  {
                    value: 'mendonca',
                    label: 'Mendonca'
                  },
                  {
                    value: 'meridiano',
                    label: 'Meridiano'
                  },
                  {
                    value: 'mesopolis',
                    label: 'Mesopolis'
                  },
                  {
                    value: 'miguelopolis',
                    label: 'Miguelopolis'
                  },
                  {
                    value: 'mineiros do tiete',
                    label: 'Mineiros do Tiete'
                  },
                  {
                    value: 'mira estrela',
                    label: 'Mira Estrela'
                  },
                  {
                    value: 'miracatu',
                    label: 'Miracatu'
                  },
                  {
                    value: 'mirandopolis',
                    label: 'Mirandopolis'
                  },
                  {
                    value: 'mirante do paranapanema',
                    label: 'Mirante do Paranapanema'
                  },
                  {
                    value: 'mirassol',
                    label: 'Mirassol'
                  },
                  {
                    value: 'mirassolandia',
                    label: 'Mirassolandia'
                  },
                  {
                    value: 'mococa',
                    label: 'Mococa'
                  },
                  {
                    value: 'mogi guacu',
                    label: 'Mogi Guacu'
                  },
                  {
                    value: 'moji das cruzes',
                    label: 'Moji das Cruzes'
                  },
                  {
                    value: 'moji-mirim',
                    label: 'Moji-Mirim'
                  },
                  {
                    value: 'mombuca',
                    label: 'Mombuca'
                  },
                  {
                    value: 'moncoes',
                    label: 'Moncoes'
                  },
                  {
                    value: 'mongagua',
                    label: 'Mongagua'
                  },
                  {
                    value: 'monte alegre do sul',
                    label: 'Monte Alegre do Sul'
                  },
                  {
                    value: 'monte alto',
                    label: 'Monte Alto'
                  },
                  {
                    value: 'monte aprazivel',
                    label: 'Monte Aprazivel'
                  },
                  {
                    value: 'monte azul paulista',
                    label: 'Monte Azul Paulista'
                  },
                  {
                    value: 'monte castelo',
                    label: 'Monte Castelo'
                  },
                  {
                    value: 'monte mor',
                    label: 'Monte Mor'
                  },
                  {
                    value: 'monteiro lobato',
                    label: 'Monteiro Lobato'
                  },
                  {
                    value: 'morro agudo',
                    label: 'Morro Agudo'
                  },
                  {
                    value: 'morungaba',
                    label: 'Morungaba'
                  },
                  {
                    value: 'motuca',
                    label: 'Motuca'
                  },
                  {
                    value: 'murutinga do sul',
                    label: 'Murutinga do Sul'
                  },
                  {
                    value: 'nantes',
                    label: 'Nantes'
                  },
                  {
                    value: 'narandiba',
                    label: 'Narandiba'
                  },
                  {
                    value: 'natividade da serra',
                    label: 'Natividade da Serra'
                  },
                  {
                    value: 'nazare paulista',
                    label: 'Nazare Paulista'
                  },
                  {
                    value: 'neves paulista',
                    label: 'Neves Paulista'
                  },
                  {
                    value: 'nhandeara',
                    label: 'Nhandeara'
                  },
                  {
                    value: 'nipoa',
                    label: 'Nipoa'
                  },
                  {
                    value: 'nova alianca',
                    label: 'Nova Alianca'
                  },
                  {
                    value: 'nova campina',
                    label: 'Nova Campina'
                  },
                  {
                    value: 'nova canaa paulista',
                    label: 'Nova Canaa Paulista'
                  },
                  {
                    value: 'nova castilho',
                    label: 'Nova Castilho'
                  },
                  {
                    value: 'nova europa',
                    label: 'Nova Europa'
                  },
                  {
                    value: 'nova granada',
                    label: 'Nova Granada'
                  },
                  {
                    value: 'nova guataporanga',
                    label: 'Nova Guataporanga'
                  },
                  {
                    value: 'nova independencia',
                    label: 'Nova Independencia'
                  },
                  {
                    value: 'nova luzitania',
                    label: 'Nova Luzitania'
                  },
                  {
                    value: 'nova odessa',
                    label: 'Nova Odessa'
                  },
                  {
                    value: 'novais',
                    label: 'Novais'
                  },
                  {
                    value: 'novo horizonte',
                    label: 'Novo Horizonte'
                  },
                  {
                    value: 'nuporanga',
                    label: 'Nuporanga'
                  },
                  {
                    value: 'ocaucu',
                    label: 'Ocaucu'
                  },
                  {
                    value: 'oleo',
                    label: 'Oleo'
                  },
                  {
                    value: 'olimpia',
                    label: 'Olimpia'
                  },
                  {
                    value: 'onda verde',
                    label: 'Onda Verde'
                  },
                  {
                    value: 'oriente',
                    label: 'Oriente'
                  },
                  {
                    value: 'orindiuva',
                    label: 'Orindiuva'
                  },
                  {
                    value: 'orlandia',
                    label: 'Orlandia'
                  },
                  {
                    value: 'osasco',
                    label: 'Osasco'
                  },
                  {
                    value: 'oscar bressane',
                    label: 'Oscar Bressane'
                  },
                  {
                    value: 'osvaldo cruz',
                    label: 'Osvaldo Cruz'
                  },
                  {
                    value: 'ourinhos',
                    label: 'Ourinhos'
                  },
                  {
                    value: 'ouro verde',
                    label: 'Ouro Verde'
                  },
                  {
                    value: 'ouroeste',
                    label: 'Ouroeste'
                  },
                  {
                    value: 'pacaembu',
                    label: 'Pacaembu'
                  },
                  {
                    value: 'palestina',
                    label: 'Palestina'
                  },
                  {
                    value: 'palmares paulista',
                    label: 'Palmares Paulista'
                  },
                  {
                    value: 'palmeira doeste', 
                    label:'Palmeirad Oeste'
                  },
                  {
                    value: 'palmital',
                    label: 'Palmital'
                  },
                  {
                    value: 'panorama',
                    label: 'Panorama'
                  },
                  {
                    value: 'paraguacu paulista',
                    label: 'Paraguacu Paulista'
                  },
                  {
                    value: 'paraibuna',
                    label: 'Paraibuna'
                  },
                  {
                    value: 'paraiso',
                    label: 'Paraiso'
                  },
                  {
                    value: 'paranapanema',
                    label: 'Paranapanema'
                  },
                  {
                    value: 'paranapua',
                    label: 'Paranapua'
                  },
                  {
                    value: 'parapua',
                    label: 'Parapua'
                  },
                  {
                    value: 'pardinho',
                    label: 'Pardinho'
                  },
                  {
                    value: 'pariquera-acu',
                    label: 'Pariquera-Acu'
                  },
                  {
                    value: 'parisi',
                    label: 'Parisi'
                  },
                  {
                    value: 'patrocinio paulista',
                    label: 'Patrocinio Paulista'
                  },
                  {
                    value: 'pauliceia',
                    label: 'Pauliceia'
                  },
                  {
                    value: 'paulinia',
                    label: 'Paulinia'
                  },
                  {
                    value: 'paulistania',
                    label: 'Paulistania'
                  },
                  {
                    value: 'paulo de faria',
                    label: 'Paulo de Faria'
                  },
                  {
                    value: 'pederneiras',
                    label: 'Pederneiras'
                  },
                  {
                    value: 'pedra bela',
                    label: 'Pedra Bela'
                  },
                  {
                    value: 'pedranopolis',
                    label: 'Pedranopolis'
                  },
                  {
                    value: 'pedregulho',
                    label: 'Pedregulho'
                  },
                  {
                    value: 'pedreira',
                    label: 'Pedreira'
                  },
                  {
                    value: 'pedrinhas paulista',
                    label: 'Pedrinhas Paulista'
                  },
                  {
                    value: 'pedro de toledo',
                    label: 'Pedro de Toledo'
                  },
                  {
                    value: 'penapolis',
                    label: 'Penapolis'
                  },
                  {
                    value: 'pereira barreto',
                    label: 'Pereira Barreto'
                  },
                  {
                    value: 'pereiras',
                    label: 'Pereiras'
                  },
                  {
                    value: 'peruibe',
                    label: 'Peruibe'
                  },
                  {
                    value: 'piacatu',
                    label: 'Piacatu'
                  },
                  {
                    value: 'piedade',
                    label: 'Piedade'
                  },
                  {
                    value: 'pilar do sul',
                    label: 'Pilar do Sul'
                  },
                  {
                    value: 'pindamonhangaba',
                    label: 'Pindamonhangaba'
                  },
                  {
                    value: 'pindorama',
                    label: 'Pindorama'
                  },
                  {
                    value: 'pinhalzinho',
                    label: 'Pinhalzinho'
                  },
                  {
                    value: 'piquerobi',
                    label: 'Piquerobi'
                  },
                  {
                    value: 'piquete',
                    label: 'Piquete'
                  },
                  {
                    value: 'piracaia',
                    label: 'Piracaia'
                  },
                  {
                    value: 'piracicaba',
                    label: 'Piracicaba'
                  },
                  {
                    value: 'piraju',
                    label: 'Piraju'
                  },
                  {
                    value: 'pirajui',
                    label: 'Pirajui'
                  },
                  {
                    value: 'pirangi',
                    label: 'Pirangi'
                  },
                  {
                    value: 'pirapora do bom jesus',
                    label: 'Pirapora do Bom Jesus'
                  },
                  {
                    value: 'pirapozinho',
                    label: 'Pirapozinho'
                  },
                  {
                    value: 'pirassununga',
                    label: 'Pirassununga'
                  },
                  {
                    value: 'piratininga',
                    label: 'Piratininga'
                  },
                  {
                    value: 'pitangueiras',
                    label: 'Pitangueiras'
                  },
                  {
                    value: 'planalto',
                    label: 'Planalto'
                  },
                  {
                    value: 'platina',
                    label: 'Platina'
                  },
                  {
                    value: 'poa',
                    label: 'Poa'
                  },
                  {
                    value: 'poloni',
                    label: 'Poloni'
                  },
                  {
                    value: 'pompeia',
                    label: 'Pompeia'
                  },
                  {
                    value: 'pongai',
                    label: 'Pongai'
                  },
                  {
                    value: 'pontal',
                    label: 'Pontal'
                  },
                  {
                    value: 'pontalinda',
                    label: 'Pontalinda'
                  },
                  {
                    value: 'pontes gestal',
                    label: 'Pontes Gestal'
                  },
                  {
                    value: 'populina',
                    label: 'Populina'
                  },
                  {
                    value: 'porangaba',
                    label: 'Porangaba'
                  },
                  {
                    value: 'porto feliz',
                    label: 'Porto Feliz'
                  },
                  {
                    value: 'porto ferreira',
                    label: 'Porto Ferreira'
                  },
                  {
                    value: 'potim',
                    label: 'Potim'
                  },
                  {
                    value: 'potirendaba',
                    label: 'Potirendaba'
                  },
                  {
                    value: 'pracinha',
                    label: 'Pracinha'
                  },
                  {
                    value: 'pradopolis',
                    label: 'Pradopolis'
                  },
                  {
                    value: 'praia grande',
                    label: 'Praia Grande'
                  },
                  {
                    value: 'pratania',
                    label: 'Pratania'
                  },
                  {
                    value: 'presidente alves',
                    label: 'Presidente Alves'
                  },
                  {
                    value: 'presidente bernardes',
                    label: 'Presidente Bernardes'
                  },
                  {
                    value: 'presidente epitacio',
                    label: 'Presidente Epitacio'
                  },
                  {
                    value: 'presidente prudente',
                    label: 'Presidente Prudente'
                  },
                  {
                    value: 'presidente venceslau',
                    label: 'Presidente Venceslau'
                  },
                  {
                    value: 'promissao',
                    label: 'Promissao'
                  },
                  {
                    value: 'quadra',
                    label: 'Quadra'
                  },
                  {
                    value: 'quata',
                    label: 'Quata'
                  },
                  {
                    value: 'queiroz',
                    label: 'Queiroz'
                  },
                  {
                    value: 'queluz',
                    label: 'Queluz'
                  },
                  {
                    value: 'quintana',
                    label: 'Quintana'
                  },
                  {
                    value: 'rafard',
                    label: 'Rafard'
                  },
                  {
                    value: 'rancharia',
                    label: 'Rancharia'
                  },
                  {
                    value: 'redencao da serra',
                    label: 'Redencao da Serra'
                  },
                  {
                    value: 'regente feijo',
                    label: 'Regente Feijo'
                  },
                  {
                    value: 'reginopolis',
                    label: 'Reginopolis'
                  },
                  {
                    value: 'registro',
                    label: 'Registro'
                  },
                  {
                    value: 'restinga',
                    label: 'Restinga'
                  },
                  {
                    value: 'ribeira',
                    label: 'Ribeira'
                  },
                  {
                    value: 'ribeirao bonito',
                    label: 'Ribeirao Bonito'
                  },
                  {
                    value: 'ribeirao branco',
                    label: 'Ribeirao Branco'
                  },
                  {
                    value: 'ribeirao corrente',
                    label: 'Ribeirao Corrente'
                  },
                  {
                    value: 'ribeirao grande',
                    label: 'Ribeirao Grande'
                  },
                  {
                    value: 'ribeirao pires',
                    label: 'Ribeirao Pires'
                  },
                  {
                    value: 'ribeirao preto',
                    label: 'Ribeirao Preto'
                  },
                  {
                    value: 'ribeirao do sul',
                    label: 'Ribeirao do Sul'
                  },
                  {
                    value: 'ribeirao dos indios',
                    label: 'Ribeirao dos Indios'
                  },
                  {
                    value: 'rifaina',
                    label: 'Rifaina'
                  },
                  {
                    value: 'rincao',
                    label: 'Rincao'
                  },
                  {
                    value: 'rinopolis',
                    label: 'Rinopolis'
                  },
                  {
                    value: 'rio claro',
                    label: 'Rio Claro'
                  },
                  {
                    value: 'rio grande da serra',
                    label: 'Rio Grande da Serra'
                  },
                  {
                    value: 'rio das pedras',
                    label: 'Rio das Pedras'
                  },
                  {
                    value: 'riolandia',
                    label: 'Riolandia'
                  },
                  {
                    value: 'riversul',
                    label: 'Riversul'
                  },
                  {
                    value: 'rosana',
                    label: 'Rosana'
                  },
                  {
                    value: 'roseira',
                    label: 'Roseira'
                  },
                  {
                    value: 'rubiacea',
                    label: 'Rubiacea'
                  },
                  {
                    value: 'rubineia',
                    label: 'Rubineia'
                  },
                  {
                    value: 'sabino',
                    label: 'Sabino'
                  },
                  {
                    value: 'sagres',
                    label: 'Sagres'
                  },
                  {
                    value: 'sales oliveira',
                    label: 'Sales Oliveira'
                  },
                  {
                    value: 'sales',
                    label: 'Sales'
                  },
                  {
                    value: 'salesopolis',
                    label: 'Salesopolis'
                  },
                  {
                    value: 'salmourao',
                    label: 'Salmourao'
                  },
                  {
                    value: 'saltinho',
                    label: 'Saltinho'
                  },
                  {
                    value: 'salto grande',
                    label: 'Salto Grande'
                  },
                  {
                    value: 'salto de pirapora',
                    label: 'Salto de Pirapora'
                  },
                  {
                    value: 'salto',
                    label: 'Salto'
                  },
                  {
                    value: 'sandovalina',
                    label: 'Sandovalina'
                  },
                  {
                    value: 'santa adelia',
                    label: 'Santa Adelia'
                  },
                  {
                    value: 'santa albertina',
                    label: 'Santa Albertina'
                  },
                  {
                    value: 'santa barbara doeste', 
                    label:'SantaBarbarad Oeste'
                  },
                  {
                    value: 'santa branca',
                    label: 'Santa Branca'
                  },
                  {
                    value: 'santa clara doeste', 
                    label:'SantaClarad Oeste'
                  },
                  {
                    value: 'santa cruz da conceicao',
                    label: 'Santa Cruz da Conceicao'
                  },
                  {
                    value: 'santa cruz da esperanca',
                    label: 'Santa Cruz da Esperanca'
                  },
                  {
                    value: 'santa cruz das palmeiras',
                    label: 'Santa Cruz das Palmeiras'
                  },
                  {
                    value: 'santa cruz do rio pardo',
                    label: 'Santa Cruz do Rio Pardo'
                  },
                  {
                    value: 'santa ernestina',
                    label: 'Santa Ernestina'
                  },
                  {
                    value: 'santa fe do sul',
                    label: 'Santa Fe do Sul'
                  },
                  {
                    value: 'santa gertrudes',
                    label: 'Santa Gertrudes'
                  },
                  {
                    value: 'santa isabel',
                    label: 'Santa Isabel'
                  },
                  {
                    value: 'santa lucia',
                    label: 'Santa Lucia'
                  },
                  {
                    value: 'santa maria da serra',
                    label: 'Santa Maria da Serra'
                  },
                  {
                    value: 'santa mercedes',
                    label: 'Santa Mercedes'
                  },
                  {
                    value: 'santa rita doeste',
                    label:'SantaRitad Oeste'
                  },
                  {
                    value: 'santa rita do passa quatro',
                    label: 'Santa Rita do Passa Quatro'
                  },
                  {
                    value: 'santa rosa de viterbo',
                    label: 'Santa Rosa de Viterbo'
                  },
                  {
                    value: 'santa salete',
                    label: 'Santa Salete'
                  },
                  {
                    value: 'santana da ponte pensa',
                    label: 'Santana da Ponte Pensa'
                  },
                  {
                    value: 'santana de parnaiba',
                    label: 'Santana de Parnaiba'
                  },
                  {
                    value: 'santo anastacio',
                    label: 'Santo Anastacio'
                  },
                  {
                    value: 'santo andre',
                    label: 'Santo Andre'
                  },
                  {
                    value: 'santo antonio da alegria',
                    label: 'Santo Antonio da Alegria'
                  },
                  {
                    value: 'santo antonio de posse',
                    label: 'Santo Antonio de Posse'
                  },
                  {
                    value: 'santo antonio do aracangua',
                    label: 'Santo Antonio do Aracangua'
                  },
                  {
                    value: 'santo antonio do jardim',
                    label: 'Santo Antonio do Jardim'
                  },
                  {
                    value: 'santo antonio do pinhal',
                    label: 'Santo Antonio do Pinhal'
                  },
                  {
                    value: 'santo expedito',
                    label: 'Santo Expedito'
                  },
                  {
                    value: 'santopolis do aguapei',
                    label: 'Santopolis do Aguapei'
                  },
                  {
                    value: 'santos',
                    label: 'Santos'
                  },
                  {
                    value: 'sao bento do sapucai',
                    label: 'Sao Bento do Sapucai'
                  },
                  {
                    value: 'sao bernardo do campo',
                    label: 'Sao Bernardo do Campo'
                  },
                  {
                    value: 'sao caetano do sul',
                    label: 'Sao Caetano do Sul'
                  },
                  {
                    value: 'sao carlos',
                    label: 'Sao Carlos'
                  },
                  {
                    value: 'sao francisco',
                    label: 'Sao Francisco'
                  },
                  {
                    value: 'sao joao da boa vista',
                    label: 'Sao Joao da Boa Vista'
                  },
                  {
                    value: 'sao joao das duas pontes',
                    label: 'Sao Joao das Duas Pontes'
                  },
                  {
                    value: 'sao joao de iracema',
                    label: 'Sao Joao de Iracema'
                  },
                  {
                    value: 'sao joao do pau dalho', 
                    label:'SaoJoaodoPaud Alho'
                  },
                  {
                    value: 'sao joaquim da barra',
                    label: 'Sao Joaquim da Barra'
                  },
                  {
                    value: 'sao jose da bela vista',
                    label: 'Sao Jose da Bela Vista'
                  },
                  {
                    value: 'sao jose do barreiro',
                    label: 'Sao Jose do Barreiro'
                  },
                  {
                    value: 'sao jose do rio pardo',
                    label: 'Sao Jose do Rio Pardo'
                  },
                  {
                    value: 'sao jose do rio preto',
                    label: 'Sao Jose do Rio Preto'
                  },
                  {
                    value: 'sao jose dos campos',
                    label: 'Sao Jose dos Campos'
                  },
                  {
                    value: 'sao lourenco da serra',
                    label: 'Sao Lourenco da Serra'
                  },
                  {
                    value: 'sao luis do paraitinga',
                    label: 'Sao Luis do Paraitinga'
                  },
                  {
                    value: 'sao manuel',
                    label: 'Sao Manuel'
                  },
                  {
                    value: 'sao miguel arcanjo',
                    label: 'Sao Miguel Arcanjo'
                  },
                  {
                    value: 'sao paulo',
                    label: 'Sao Paulo'
                  },
                  {
                    value: 'sao pedro do turvo',
                    label: 'Sao Pedro do Turvo'
                  },
                  {
                    value: 'sao pedro',
                    label: 'Sao Pedro'
                  },
                  {
                    value: 'sao roque',
                    label: 'Sao Roque'
                  },
                  {
                    value: 'sao sebastiao da grama',
                    label: 'Sao Sebastiao da Grama'
                  },
                  {
                    value: 'sao sebastiao',
                    label: 'Sao Sebastiao'
                  },
                  {
                    value: 'sao simao',
                    label: 'Sao Simao'
                  },
                  {
                    value: 'sao vicente',
                    label: 'Sao Vicente'
                  },
                  {
                    value: 'sarapui',
                    label: 'Sarapui'
                  },
                  {
                    value: 'sarutaia',
                    label: 'Sarutaia'
                  },
                  {
                    value: 'sebastianopolis do sul',
                    label: 'Sebastianopolis do Sul'
                  },
                  {
                    value: 'serra azul',
                    label: 'Serra Azul'
                  },
                  {
                    value: 'serra negra',
                    label: 'Serra Negra'
                  },
                  {
                    value: 'serrana',
                    label: 'Serrana'
                  },
                  {
                    value: 'sertaozinho',
                    label: 'Sertaozinho'
                  },
                  {
                    value: 'sete barras',
                    label: 'Sete Barras'
                  },
                  {
                    value: 'severinia',
                    label: 'Severinia'
                  },
                  {
                    value: 'silveiras',
                    label: 'Silveiras'
                  },
                  {
                    value: 'socorro',
                    label: 'Socorro'
                  },
                  {
                    value: 'sorocaba',
                    label: 'Sorocaba'
                  },
                  {
                    value: 'sud mennucci',
                    label: 'Sud Mennucci'
                  },
                  {
                    value: 'sumare',
                    label: 'Sumare'
                  },
                  {
                    value: 'suzanapolis',
                    label: 'Suzanapolis'
                  },
                  {
                    value: 'suzano',
                    label: 'Suzano'
                  },
                  {
                    value: 'tabapua',
                    label: 'Tabapua'
                  },
                  {
                    value: 'tabatinga',
                    label: 'Tabatinga'
                  },
                  {
                    value: 'taboao da serra',
                    label: 'Taboao da Serra'
                  },
                  {
                    value: 'taciba',
                    label: 'Taciba'
                  },
                  {
                    value: 'taguai',
                    label: 'Taguai'
                  },
                  {
                    value: 'taiacu',
                    label: 'Taiacu'
                  },
                  {
                    value: 'taiuva',
                    label: 'Taiuva'
                  },
                  {
                    value: 'tambau',
                    label: 'Tambau'
                  },
                  {
                    value: 'tanabi',
                    label: 'Tanabi'
                  },
                  {
                    value: 'tapirai',
                    label: 'Tapirai'
                  },
                  {
                    value: 'tapiratiba',
                    label: 'Tapiratiba'
                  },
                  {
                    value: 'taquaral',
                    label: 'Taquaral'
                  },
                  {
                    value: 'taquaritinga',
                    label: 'Taquaritinga'
                  },
                  {
                    value: 'taquarituba',
                    label: 'Taquarituba'
                  },
                  {
                    value: 'taquarivai',
                    label: 'Taquarivai'
                  },
                  {
                    value: 'tarabai',
                    label: 'Tarabai'
                  },
                  {
                    value: 'taruma',
                    label: 'Taruma'
                  },
                  {
                    value: 'tatui',
                    label: 'Tatui'
                  },
                  {
                    value: 'taubate',
                    label: 'Taubate'
                  },
                  {
                    value: 'tejupa',
                    label: 'Tejupa'
                  },
                  {
                    value: 'teodoro sampaio',
                    label: 'Teodoro Sampaio'
                  },
                  {
                    value: 'terra roxa',
                    label: 'Terra Roxa'
                  },
                  {
                    value: 'tiete',
                    label: 'Tiete'
                  },
                  {
                    value: 'timburi',
                    label: 'Timburi'
                  },
                  {
                    value: 'torre de pedra',
                    label: 'Torre de Pedra'
                  },
                  {
                    value: 'torrinha',
                    label: 'Torrinha'
                  },
                  {
                    value: 'trabiju',
                    label: 'Trabiju'
                  },
                  {
                    value: 'tremembe',
                    label: 'Tremembe'
                  },
                  {
                    value: 'tres fronteiras',
                    label: 'Tres Fronteiras'
                  },
                  {
                    value: 'tuiuti',
                    label: 'Tuiuti'
                  },
                  {
                    value: 'tupa',
                    label: 'Tupa'
                  },
                  {
                    value: 'tupi paulista',
                    label: 'Tupi Paulista'
                  },
                  {
                    value: 'turiuba',
                    label: 'Turiuba'
                  },
                  {
                    value: 'turmalina',
                    label: 'Turmalina'
                  },
                  {
                    value: 'ubarana',
                    label: 'Ubarana'
                  },
                  {
                    value: 'ubatuba',
                    label: 'Ubatuba'
                  },
                  {
                    value: 'ubirajara',
                    label: 'Ubirajara'
                  },
                  {
                    value: 'uchoa',
                    label: 'Uchoa'
                  },
                  {
                    value: 'uniao paulista',
                    label: 'Uniao Paulista'
                  },
                  {
                    value: 'urania',
                    label: 'Urania'
                  },
                  {
                    value: 'uru',
                    label: 'Uru'
                  },
                  {
                    value: 'urupes',
                    label: 'Urupes'
                  },
                  {
                    value: 'valentim gentil',
                    label: 'Valentim Gentil'
                  },
                  {
                    value: 'valinhos',
                    label: 'Valinhos'
                  },
                  {
                    value: 'valparaiso',
                    label: 'Valparaiso'
                  },
                  {
                    value: 'vargem grande paulista',
                    label: 'Vargem Grande Paulista'
                  },
                  {
                    value: 'vargem grande do sul',
                    label: 'Vargem Grande do Sul'
                  },
                  {
                    value: 'vargem',
                    label: 'Vargem'
                  },
                  {
                    value: 'varzea paulista',
                    label: 'Varzea Paulista'
                  },
                  {
                    value: 'vera cruz',
                    label: 'Vera Cruz'
                  },
                  {
                    value: 'vinhedo',
                    label: 'Vinhedo'
                  },
                  {
                    value: 'viradouro',
                    label: 'Viradouro'
                  },
                  {
                    value: 'vista alegre do alto',
                    label: 'Vista Alegre do Alto'
                  },
                  {
                    value: 'vitoria brasil',
                    label: 'Vitoria Brasil'
                  },
                  {
                    value: 'votorantim',
                    label: 'Votorantim'
                  },
                  {
                    value: 'votuporanga',
                    label: 'Votuporanga'
                  },
                  {
                    value: 'zacarias',
                    label: 'Zacarias'
                  }
            ]
        }
    }

    componentDidMount(){
        console.log(this.state)
    }

    onChangeValues = () => {
        console.log(this.state)

        const { dispatch , user  } = this.props

        requestDataLocationUpdate({ ...this.state , token : user.token }).then(({ typeDispatch , data , response })=>{
            dispatch(typeDispatch(response))
        })
    }

    onUpdatePhoto = () => {
        
    }

    render(){
        const { photo } = this.props.data_user
        const { number_account } = this.props.tutoo_digital_account
        const { zip_code , states , state , citys , city , address , number , neighborhood , complement } = this.state
        return(
            <TutooContainerPerfilEdition numberAccount={number_account} goBack={ () => {  
                
                this.props.navigation.dispatch(navigationUserClientScrenn) 
                
            } } photo={photo} onPickerPhoto={() => this.onUpdatePhoto()} >
                  <InputTextDran 
                        style={{ width : "50%" }} 
                        title="CEP:" 
                        value={zip_code} 
                        keyboardType="numeric"
                        mask={"[00000]-[000]"}
                        onChangeText={(value) => this.setState({ zip_code : value})}
                        onBlur={(value) => this.onChangeValues()}
                        />
                   <PickerDran 
                        style={{ width : "50%" }}
                        title="Estado:" 
                        values={states}
                        value={state}
                        onValueChange={(value) => {
                            console.log(value)
                            this.setState({ state : value }, () => {
                                this.onChangeValues()
                            })
                        }}
                        />
                    <PickerDran 
                        style={{ width : "100%" }}
                        title="Cidade:"
                        values={citys}
                        value={city}
                        onValueChange={(value) => {
                            console.log(value)
                            this.setState({ city : value }, () => {
                                this.onChangeValues()
                            })
                        }}
                        />
                    <InputTextDran 
                        style={{ width : "65%" }} 
                        title="Endereço:" 
                        value={address} 
                        onChangeText={(value) => this.setState({ address : value})}
                        onBlur={(value) => this.onChangeValues()}
                        />
                    <InputTextDran 
                        style={{ width : "35%" }} 
                        title="Número:" 
                        value={number} 
                        keyboardType="numeric"
                        onChangeText={(value) => this.setState({ number : value})}
                        onBlur={(value) => this.onChangeValues()}
                        />

                     <InputTextDran 
                        style={{ width : "100%" }} 
                        title="Bairro:" 
                        value={neighborhood} 
                        onChangeText={(value) => this.setState({ neighborhood : value})}
                        onBlur={(value) => this.onChangeValues()}
                        />
                    <InputTextDran 
                        style={{ width : "100%" }} 
                        title="Complemento:" 
                        value={complement} 
                        onChangeText={(value) => this.setState({ complement : value})}
                        onBlur={(value) => this.onChangeValues()}
                        />
                     
                    
            </TutooContainerPerfilEdition>
        )
    }
}

let mapStateProps = state => ({
    user : state.user.user,
    data_user : state.user.user.user_client.data_user,
    tutoo_digital_account : state.user.user.user_client.tutoo_digital_account
})

export default connect(mapStateProps)(Location)

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        height : height * 0.12,
        padding : 10,
        backgroundColor : colors.orangeDark,
        justifyContent : 'flex-start',
        alignItems : "flex-end",
        marginBottom : 15
    },
    content : {
        flexDirection : "row",
        alignItems : "flex-start",
        paddingHorizontal : 10,
        flexWrap : "wrap",
    }
})