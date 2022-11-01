CREATE table if not exists medico(
	medico_id INT (4) AUTO_INCREMENT PRIMARY KEY,
    cpf_medico INT(11) not null,
    crm_medico varchar(8) not null,
    nome_medico varchar(100) not null,
    data_nascimento_med date not null,
    função_med varchar(40) not null,
    especialidade_med varchar(40) not null,
    anos_experiencia int(2) not null,
    telefone1_med int(11) not null,
    telefone2_med int(11) null,
    email_med varchar(100) not null,
	endereço_med varchar(255) null,
    cep_med int(8) null
);
CREATE TABLE if not exists paciente_contato(
	paciente_contato_id int(4) auto_increment primary key,
    telefone1_paciente int(11) not null,
    telefone2_paciente int(11) null,
    email_paciente varchar(100) not null,
    endereço_paciente varchar(255) not null,
    cep_paciente int(8) not null
);
create table if not exists convenio_paciente(
	convenio_id int(4) auto_increment primary key,
    nome_convenio varchar(100) not null,
    cnpj_convenio int(14) not null,
    tempo_carencia varchar(50) not null
);
CREATE table if not exists paciente(
	paciente_id INT (4) AUTO_INCREMENT PRIMARY KEY,
    cpf_paciente INT(11) not null,
    rg_paciente VARCHAR(10) NULL,
    nome_paciente varchar(100) not null,
    datanas_paciente date not null,
    paciente_contato_id int(4) not null,
    FOREIGN KEY (paciente_contato_id) REFERENCES paciente_contato(paciente_contato_id) ON DELETE CASCADE ON UPDATE CASCADE,
    convenio_id int(4) not null,
    FOREIGN KEY (convenio_id) REFERENCES convenio_paciente(convenio_id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE table if not exists receita_med(
	receita_id INT (4) AUTO_INCREMENT PRIMARY KEY,
	remedios_receitados varchar(255),
    medidaremedios varchar(50),
    instruções_consulta text
);
CREATE table if not exists consulta(
	consulta_id INT (4) AUTO_INCREMENT PRIMARY KEY,
    data_consulta date not null,
    hora_consulta time not null,
    local_consulta varchar(50) not null,
    sala_consulta varchar(5) not null,
    paciente_id int(4) not null,
    FOREIGN KEY (paciente_id) REFERENCES paciente(paciente_id) ON DELETE CASCADE ON UPDATE CASCADE,
    valor_consulta DECIMAL (8, 2) not null,
    especialidade_consulta varchar(40) not null,
    medico_id int(4) not null,
    FOREIGN KEY (medico_id) REFERENCES medico(medico_id) ON DELETE CASCADE ON UPDATE CASCADE,
	receita_id int(4) not null,
	FOREIGN KEY (receita_id) REFERENCES receita_med(receita_id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE table if not exists tipo_quarto(
    quarto_tipo_id int(4) auto_increment primary key,
    valor_diaria DECIMAL (8, 2) not null,
    descrição text not null
);
create table if not exists quarto(
	quarto_id int(4) auto_increment primary key,
    numero_quarto int(4) not null,
	quarto_tipo_id int(4) not null,
    FOREIGN KEY (quarto_tipo_id) REFERENCES tipo_quarto(quarto_tipo_id) ON DELETE CASCADE ON UPDATE CASCADE
);
create table if not exists enfermeiro(
	enfermeiro_id int(4) auto_increment primary key,
    nome_enfermeiro varchar(100) not null,
    cpf_enfermeiro INT(11) not null,
    cre_enfermeiro varchar(8) not null
);
CREATE table if not exists internacao(
	internacao_id INT (4) AUTO_INCREMENT PRIMARY KEY,
    data_entrada date not null,
    data_prev_alta date not null,
    data_alta date null,
    procedimento text not null,
    quarto_id int(4) not null,
    FOREIGN KEY (quarto_id) REFERENCES quarto(quarto_id) ON DELETE CASCADE ON UPDATE CASCADE,
    paciente_id int(4) not null,
    FOREIGN KEY (paciente_id) REFERENCES paciente(paciente_id) ON DELETE CASCADE ON UPDATE CASCADE,
    medico_id int(4) not null,
    FOREIGN KEY (medico_id) REFERENCES medico(medico_id) ON DELETE CASCADE ON UPDATE CASCADE,
    enfermeiro_id int(4) not null,
    FOREIGN KEY (enfermeiro_id) REFERENCES enfermeiro(enfermeiro_id) ON DELETE CASCADE ON UPDATE CASCADE
);