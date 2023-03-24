using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeradordePessoa
{
    class NomeCompleto
    {
        private string nome;
        private string sobreNome;

        public string Getnomecomplete()
        {
            return this.nome + " " + this.sobreNome;
        }
        public void Setnome(string nom, string sobren)
        {
            this.nome = nom;
            this.sobreNome = sobren;
        }
    }
}
