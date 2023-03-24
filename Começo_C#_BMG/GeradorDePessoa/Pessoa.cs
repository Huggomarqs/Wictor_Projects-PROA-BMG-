using System;
using System.Collections;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace GeradordePessoa
{
    class Pessoa : NomeCompleto
    {
        Random rnd = new Random();
        private int idade;
        private double altura;
        private int peso;
        private string nometodo;
        private string cpf = gerarcpf.GerarCpf();
        
        public Pessoa(string nm, string sobrnome, int idade1) {
            Setnome(nm, sobrnome);
            do { Reptiçãocod("Insira uma idade verdadeira!", idade1); }
            while (MethEntrevalores(idade1, 1, 100));
            int peso = rnd.Next(52, 120);
            double altura;
            do { altura = 1.5 + rnd.NextDouble(); }
            while (altura > 2.20);
            this.altura = altura;
            nometodo = Getnomecomplete();
            this.idade = idade1;
            this.peso = peso;
        }
        public string GetNome() { return this.nometodo; }
        public int GetIdade() { return this.idade;}
        public string GetAltura() {
            return Convert.ToString(Math.Round(this.altura, 2) + "m");
        }
        public string GetPeso() { 
            string pesonv = Convert.ToString(this.peso) + "KG";
            return pesonv;
        }
        public string GetCpf() {
            int jorge = 0;
            string primnum = "";
            string meio = "";
            string numfinal = "";
            string digito = "";
            foreach(char c in this.cpf){
                if (MethEntrevalores(jorge, 0,2)) { primnum += c; }
                if (MethEntrevalores(jorge, 3,5 )) { meio += c; }
                if (MethEntrevalores(jorge, 6, 8)) { numfinal += c; }
                if (MethEntrevalores(jorge, 9, 10)) { digito += c; }
                jorge++;
            }
            string Cpf = primnum + "." + meio + "." + numfinal  + "-" + digito;
            return Cpf;
        }
        public static bool MethEntrevalores(int jorge, int a, int b)
        {
            if (jorge >= 100 || jorge <= 0)
            {
                if (jorge < a || jorge > b)
                {
                    return false;
                }
                if (jorge >= a && jorge <= b)
                {
                    return true;
                }
            }
            return false;
        }
        public static void Reptiçãocod(string textoerro, int repete)
        {
            Console.WriteLine(textoerro);
            repete = Convert.ToInt32(Console.ReadLine());
        }
    }
    }

