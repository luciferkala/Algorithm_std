#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int a, b;
    while (true)
    {
        cin >> a >> b;
        if (cin.eof() == true)
            break;
        cout << a + b << endl;
    }
    return 0;
}