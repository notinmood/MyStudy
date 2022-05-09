using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreConsoleApp.协变和逆变研究
{
    internal class Biz
    {
        public static void DisplayInformation(string userName)
        {
            Console.WriteLine(string.Format("hello! {0}", userName));
        }

        public static void DoSomething<T>(T input)
        {
            Console.WriteLine("T的类型为" + (typeof(T)).ToString());
            Console.WriteLine(input.ToString());
        }
    }
}
