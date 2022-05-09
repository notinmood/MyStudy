using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreConsoleApp.协变和逆变研究
{
    /// <summary>
    /// 非泛型委托
    /// </summary>
    /// <param name="input"></param>
    public delegate void MyDelegation(string input);

    /// <summary>
    /// 
    /// 不支持协变逆变的泛型委托
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="param"></param>
    public delegate void MyActionCommon<T>(T param);//不支持逆变与协变

    public delegate void MyActionIn<in T>(T param);

    public delegate T MyActionOut<out T>();

    public delegate T MyActionInOut<in P, out T>(P input);
}
