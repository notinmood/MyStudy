using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreConsoleApp.协变和逆变研究
{
    /// <summary>
    /// 
    /// </summary>
    /// <param name="input"></param>
    public delegate void MyDelegation(string input);
    public delegate void MyActionA<T>(T param);//不支持逆变与协变
}
