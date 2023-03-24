using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace GeradordePessoa
{
    internal class teste
    {
        static void Main(string[] args)
        {
            string tratamento;
            Console.WriteLine("voce quer criar uma pessoa?");
            Console.WriteLine("1 - Sim");
            Console.WriteLine("2 - Não");
            do { tratamento = Console.ReadLine(); }
            while (tratamento != "1" && tratamento != "2");
            int a = Convert.ToInt32(tratamento);
            if (a == 1)
            {
                Console.WriteLine("Deu certo! pressione ENTER...");
                Console.ReadLine();
                criarPessoa();
            }
        }

            public static void criarPessoa()
        {
            string nm;
            string sobrnome;
            int idade;

            Console.WriteLine("Olá, Digite o primeiro nome da pessoa");
            nm = Console.ReadLine();
            Console.WriteLine("Olá, Digite o sobrenome dela");
            sobrnome = Console.ReadLine();
            Console.WriteLine("Qual a idade dessa pessoa?");
            idade = Convert.ToInt32(Console.ReadLine());


            try
            {
                Pessoa p1 = new Pessoa(nm, sobrnome, idade);
                Console.WriteLine(p1.GetNome());
                Console.WriteLine(p1.GetIdade());
                Console.WriteLine(p1.GetAltura());
                Console.WriteLine(p1.GetPeso());
                Console.WriteLine(p1.GetCpf());
                Console.ReadLine() ;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }
    }
}
