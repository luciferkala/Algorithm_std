#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    int t, a, b;
    cin >> t;

    for (int i = 0; i < t; i++)
    {
        cin >> a >> b;
        cout << a + b << endl;
    }
    return 0;
}