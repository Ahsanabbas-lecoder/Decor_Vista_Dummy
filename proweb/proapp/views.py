from django.contrib import messages
from django.contrib.auth import login
from django.shortcuts import render, redirect
from .form import CustomUserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Profile 

def homeview(request):
    return render(request, 'home1/index.html')

def aboutview(request):
    return render(request, 'innerpages/about.html')

def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.first_name = form.cleaned_data['name']
            user.email = form.cleaned_data['gmail']
            user.save()
            
            # Create profile
            Profile.objects.create(
                user=user,
                role=form.cleaned_data['role']
            )
            
            login(request, user)
            messages.success(request, "Registration successful!")
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    
    return render(request, 'innerpages/signup.html', {'form': form})
def user_login(request):
    if request.user.is_authenticated:
        return redirect('home')  # Redirect if already logged in

    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f"Welcome back, {username}!")
                return redirect('home')
        else:
            messages.error(request, "Invalid username or password.")
    else:
        form = AuthenticationForm()
    
    return render(request, 'innerpages/login.html', {'form': form})

def user_logout(request):
    logout(request)
    messages.success(request, "You have been logged out.")
    return redirect('login')


# done by Umar.........

def blogasideview(request):
    return render(request, 'innerpages/blog_aside.html')

def blogdetview(request):
    return render(request, 'innerpages/blog_det.html')

def blogview(request):
    return render(request, 'innerpages/blog.html')

def contactview(request):
    return render(request, 'innerpages/contact.html')

def faqview(request):
    return render(request, 'innerpages/faq.html')

def projectview(request):
    return render(request, 'innerpages/projects.html')

def projectdetview(request):
    return render(request, 'innerpages/project_det.html')

def projects2view(request):
    return render(request, 'innerpages/projects2.html')

def serviceview(request):
    return render(request, 'innerpages/service.html')

def servicedetview(request):
    return render(request, 'innerpages/service_det.html')

def services2view(request):
    return render(request, 'innerpages/services2.html')

def teamview(request):
    return render(request, 'innerpages/team.html')

def testimonialsview(request):
    return render(request, 'innerpages/testimonials.html')