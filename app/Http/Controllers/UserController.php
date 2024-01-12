<?php
namespace App\Http\Controllers;

use Hash;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index()
    {
        $users = User::latest()->get();
        return response()->json([
            'success' => true,
            'message' => 'User List Retrieved Successfully',
            'data' => $users
        ], 200);
    }

    public function store(Request $request)
    {

        try {
            // validate request
            $request->validate([
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password'=> 'required|min:6',
                'confirmed_password' => 'required|same:password'
            ]);

            // create user
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password'=> Hash::make($request->password)
            ]);

            return response()->json([
                'status' => 'success',
                'user' => $user,
                'message' => 'User created successfully'
            ]);

        } catch (\Illuminate\Validation\ValidationException $e) {
            // Manually build validation error response
            $errors = $e->errors();

            return response()->json([
                'status' => 'error',
                'errors' => $errors,
                'message' => 'Validation error'
            ], 422); // Use the appropriate HTTP status code for validation errors
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'errors' => $e->getMessage()
            ]);
        }
    }

    public function show(User $user)
    {
        return response()->json([
            'success' => true,
            'message' => 'User Retrieved Successfully',
            'data' => $user
        ], 200);
    }

    public function update(Request $request, User $user)
    {
        try {
            $request->validate([
                'name' => 'required',
                'email' => 'required|email|unique:users,email,'.$user->id,
                'password'=> 'nullable|min:6'
            ]);

            $user->name = $request->name ?? $user->name;
            $user->email = $request->email ?? $user->email;

            if ($request->password) {
                $user->password = Hash::make($request->password);
            }

            $user->save();

            return response()->json([
                'status' => 'success',
                'user' => $user,
                'message' => 'User Updated Successfully'
            ]);

        } catch (\Illuminate\Validation\ValidationException $e) {
            // Manually build validation error response
            $errors = $e->errors();

            return response()->json([
                'status' => 'error',
                'errors' => $errors,
                'message' => 'Validation error'
            ], 422); // Use the appropriate HTTP status code for validation errors
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'errors' => $e->getMessage()
            ]);
        }


    }

    public function destroy(User $user)
    {
        try {
            $user->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'User deleted successfully',
                'users' => User::all()
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'errors' => $e->getMessage()
            ]);
        }

    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        // check if user exists
        if (!$user) {
            return response()->json([
                'message' => 'User does not exist'
            ], 401);
        }

        // check if password is correct
        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Incorrect password'
            ], 401);
        }

        // generate token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logged out'
        ]);
    }

    public function profile(Request $request)
    {
        return response()->json([
            'user' => $request->user()
        ]);
    }


}
