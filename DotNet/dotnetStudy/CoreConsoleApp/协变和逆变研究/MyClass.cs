using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreConsoleApp.协变和逆变研究
{
    internal class MyClass<T>
    {
        public static T Deal(T input)
        {
            return input;
        }
    }
}
